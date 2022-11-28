import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum {
    IncreaseNodeGroupsInGlobalReplicationGroup = "IncreaseNodeGroupsInGlobalReplicationGroup"
}
export declare enum PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum;
    version: PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
}
export declare class PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostIncreaseNodeGroupsInGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams;
    headers: PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostIncreaseNodeGroupsInGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
