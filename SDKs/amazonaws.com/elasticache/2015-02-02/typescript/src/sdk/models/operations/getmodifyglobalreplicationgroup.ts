import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyGlobalReplicationGroupActionEnum {
    ModifyGlobalReplicationGroup = "ModifyGlobalReplicationGroup"
}

export enum GetModifyGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetModifyGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyGlobalReplicationGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutomaticFailoverEnabled" })
  automaticFailoverEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheNodeType" })
  cacheNodeType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheParameterGroupName" })
  cacheParameterGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupDescription" })
  globalReplicationGroupDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" })
  globalReplicationGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyGlobalReplicationGroupVersionEnum;
}


export class GetModifyGlobalReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetModifyGlobalReplicationGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyGlobalReplicationGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyGlobalReplicationGroupHeaders;
}


export class GetModifyGlobalReplicationGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
