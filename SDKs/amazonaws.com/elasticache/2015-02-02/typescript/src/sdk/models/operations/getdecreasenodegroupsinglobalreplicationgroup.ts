import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum {
    DecreaseNodeGroupsInGlobalReplicationGroup = "DecreaseNodeGroupsInGlobalReplicationGroup"
}

export enum GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalNodeGroupsToRemove" })
  globalNodeGroupsToRemove?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalNodeGroupsToRetain" })
  globalNodeGroupsToRetain?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" })
  globalReplicationGroupId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NodeGroupCount" })
  nodeGroupCount: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
}


export class GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetDecreaseNodeGroupsInGlobalReplicationGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders;
}


export class GetDecreaseNodeGroupsInGlobalReplicationGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
