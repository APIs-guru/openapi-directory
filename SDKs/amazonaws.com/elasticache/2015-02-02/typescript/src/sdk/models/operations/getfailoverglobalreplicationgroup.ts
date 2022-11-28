import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFailoverGlobalReplicationGroupActionEnum {
    FailoverGlobalReplicationGroup = "FailoverGlobalReplicationGroup"
}

export enum GetFailoverGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetFailoverGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetFailoverGlobalReplicationGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" })
  globalReplicationGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrimaryRegion" })
  primaryRegion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrimaryReplicationGroupId" })
  primaryReplicationGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetFailoverGlobalReplicationGroupVersionEnum;
}


export class GetFailoverGlobalReplicationGroupHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetFailoverGlobalReplicationGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFailoverGlobalReplicationGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetFailoverGlobalReplicationGroupHeaders;
}


export class GetFailoverGlobalReplicationGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
