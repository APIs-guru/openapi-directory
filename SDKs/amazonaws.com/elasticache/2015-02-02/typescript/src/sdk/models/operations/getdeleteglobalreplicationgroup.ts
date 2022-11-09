import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteGlobalReplicationGroupActionEnum {
    DeleteGlobalReplicationGroup = "DeleteGlobalReplicationGroup"
}

export enum GetDeleteGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDeleteGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteGlobalReplicationGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" })
  globalReplicationGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RetainPrimaryReplicationGroup" })
  retainPrimaryReplicationGroup: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteGlobalReplicationGroupVersionEnum;
}


export class GetDeleteGlobalReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetDeleteGlobalReplicationGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteGlobalReplicationGroupQueryParams;

  @Metadata()
  headers: GetDeleteGlobalReplicationGroupHeaders;
}


export class GetDeleteGlobalReplicationGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
