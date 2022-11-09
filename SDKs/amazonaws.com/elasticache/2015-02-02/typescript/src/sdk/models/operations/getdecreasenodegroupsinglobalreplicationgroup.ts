import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum {
    DecreaseNodeGroupsInGlobalReplicationGroup = "DecreaseNodeGroupsInGlobalReplicationGroup"
}

export enum GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalNodeGroupsToRemove" })
  globalNodeGroupsToRemove?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalNodeGroupsToRetain" })
  globalNodeGroupsToRetain?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" })
  globalReplicationGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NodeGroupCount" })
  nodeGroupCount: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
}


export class GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetDecreaseNodeGroupsInGlobalReplicationGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams;

  @Metadata()
  headers: GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders;
}


export class GetDecreaseNodeGroupsInGlobalReplicationGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
