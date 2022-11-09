import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRebalanceSlotsInGlobalReplicationGroupActionEnum {
    RebalanceSlotsInGlobalReplicationGroup = "RebalanceSlotsInGlobalReplicationGroup"
}
export declare enum GetRebalanceSlotsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetRebalanceSlotsInGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: GetRebalanceSlotsInGlobalReplicationGroupActionEnum;
    applyImmediately: boolean;
    globalReplicationGroupId: string;
    version: GetRebalanceSlotsInGlobalReplicationGroupVersionEnum;
}
export declare class GetRebalanceSlotsInGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRebalanceSlotsInGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: GetRebalanceSlotsInGlobalReplicationGroupQueryParams;
    headers: GetRebalanceSlotsInGlobalReplicationGroupHeaders;
}
export declare class GetRebalanceSlotsInGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
