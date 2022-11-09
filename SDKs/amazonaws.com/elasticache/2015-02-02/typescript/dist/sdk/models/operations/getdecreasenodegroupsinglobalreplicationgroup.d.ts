import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum {
    DecreaseNodeGroupsInGlobalReplicationGroup = "DecreaseNodeGroupsInGlobalReplicationGroup"
}
export declare enum GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;
    applyImmediately: boolean;
    globalNodeGroupsToRemove?: string[];
    globalNodeGroupsToRetain?: string[];
    globalReplicationGroupId: string;
    nodeGroupCount: number;
    version: GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
}
export declare class GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDecreaseNodeGroupsInGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams;
    headers: GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders;
}
export declare class GetDecreaseNodeGroupsInGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
