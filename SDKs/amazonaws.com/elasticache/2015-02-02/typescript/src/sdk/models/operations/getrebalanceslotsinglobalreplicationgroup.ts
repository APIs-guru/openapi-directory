import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRebalanceSlotsInGlobalReplicationGroupActionEnum {
    RebalanceSlotsInGlobalReplicationGroup = "RebalanceSlotsInGlobalReplicationGroup"
}

export enum GetRebalanceSlotsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetRebalanceSlotsInGlobalReplicationGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRebalanceSlotsInGlobalReplicationGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" })
  globalReplicationGroupId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRebalanceSlotsInGlobalReplicationGroupVersionEnum;
}


export class GetRebalanceSlotsInGlobalReplicationGroupHeaders extends SpeakeasyBase {
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


export class GetRebalanceSlotsInGlobalReplicationGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRebalanceSlotsInGlobalReplicationGroupQueryParams;

  @Metadata()
  headers: GetRebalanceSlotsInGlobalReplicationGroupHeaders;
}


export class GetRebalanceSlotsInGlobalReplicationGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
