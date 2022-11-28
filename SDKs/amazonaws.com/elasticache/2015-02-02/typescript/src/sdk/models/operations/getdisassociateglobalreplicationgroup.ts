import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisassociateGlobalReplicationGroupActionEnum {
    DisassociateGlobalReplicationGroup = "DisassociateGlobalReplicationGroup"
}

export enum GetDisassociateGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDisassociateGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateGlobalReplicationGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" })
  globalReplicationGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" })
  replicationGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupRegion" })
  replicationGroupRegion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateGlobalReplicationGroupVersionEnum;
}


export class GetDisassociateGlobalReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetDisassociateGlobalReplicationGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisassociateGlobalReplicationGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisassociateGlobalReplicationGroupHeaders;
}


export class GetDisassociateGlobalReplicationGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
