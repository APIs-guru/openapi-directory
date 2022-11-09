import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateGlobalReplicationGroupActionEnum {
    CreateGlobalReplicationGroup = "CreateGlobalReplicationGroup"
}

export enum GetCreateGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetCreateGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateGlobalReplicationGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupDescription" })
  globalReplicationGroupDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupIdSuffix" })
  globalReplicationGroupIdSuffix: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PrimaryReplicationGroupId" })
  primaryReplicationGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateGlobalReplicationGroupVersionEnum;
}


export class GetCreateGlobalReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetCreateGlobalReplicationGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateGlobalReplicationGroupQueryParams;

  @Metadata()
  headers: GetCreateGlobalReplicationGroupHeaders;
}


export class GetCreateGlobalReplicationGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
