import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateGlobalReplicationGroupActionEnum {
    CreateGlobalReplicationGroup = "CreateGlobalReplicationGroup"
}

export enum GetCreateGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetCreateGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateGlobalReplicationGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupDescription" })
  globalReplicationGroupDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupIdSuffix" })
  globalReplicationGroupIdSuffix: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrimaryReplicationGroupId" })
  primaryReplicationGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateGlobalReplicationGroupVersionEnum;
}


export class GetCreateGlobalReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetCreateGlobalReplicationGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateGlobalReplicationGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateGlobalReplicationGroupHeaders;
}


export class GetCreateGlobalReplicationGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
