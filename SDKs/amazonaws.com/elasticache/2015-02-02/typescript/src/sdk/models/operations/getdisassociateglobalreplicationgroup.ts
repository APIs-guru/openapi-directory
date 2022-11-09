import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisassociateGlobalReplicationGroupActionEnum {
    DisassociateGlobalReplicationGroup = "DisassociateGlobalReplicationGroup"
}

export enum GetDisassociateGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDisassociateGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateGlobalReplicationGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" })
  globalReplicationGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" })
  replicationGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupRegion" })
  replicationGroupRegion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateGlobalReplicationGroupVersionEnum;
}


export class GetDisassociateGlobalReplicationGroupHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetDisassociateGlobalReplicationGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisassociateGlobalReplicationGroupQueryParams;

  @Metadata()
  headers: GetDisassociateGlobalReplicationGroupHeaders;
}


export class GetDisassociateGlobalReplicationGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
