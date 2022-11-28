import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRebalanceSlotsInGlobalReplicationGroupActionEnum {
    RebalanceSlotsInGlobalReplicationGroup = "RebalanceSlotsInGlobalReplicationGroup"
}
export declare enum PostRebalanceSlotsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostRebalanceSlotsInGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostRebalanceSlotsInGlobalReplicationGroupActionEnum;
    version: PostRebalanceSlotsInGlobalReplicationGroupVersionEnum;
}
export declare class PostRebalanceSlotsInGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRebalanceSlotsInGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostRebalanceSlotsInGlobalReplicationGroupQueryParams;
    headers: PostRebalanceSlotsInGlobalReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostRebalanceSlotsInGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
