import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyGlobalReplicationGroupActionEnum {
    ModifyGlobalReplicationGroup = "ModifyGlobalReplicationGroup"
}

export enum GetModifyGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetModifyGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyGlobalReplicationGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutomaticFailoverEnabled" })
  automaticFailoverEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheNodeType" })
  cacheNodeType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheParameterGroupName" })
  cacheParameterGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupDescription" })
  globalReplicationGroupDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" })
  globalReplicationGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyGlobalReplicationGroupVersionEnum;
}


export class GetModifyGlobalReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetModifyGlobalReplicationGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyGlobalReplicationGroupQueryParams;

  @Metadata()
  headers: GetModifyGlobalReplicationGroupHeaders;
}


export class GetModifyGlobalReplicationGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
