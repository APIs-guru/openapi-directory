import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDecreaseNodeGroupsInGlobalReplicationGroupActionEnum {
    DecreaseNodeGroupsInGlobalReplicationGroup = "DecreaseNodeGroupsInGlobalReplicationGroup"
}
export declare enum PostDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDecreaseNodeGroupsInGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;
    version: PostDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
}
export declare class PostDecreaseNodeGroupsInGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDecreaseNodeGroupsInGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostDecreaseNodeGroupsInGlobalReplicationGroupQueryParams;
    headers: PostDecreaseNodeGroupsInGlobalReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDecreaseNodeGroupsInGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
