import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteGlobalReplicationGroupActionEnum {
    DeleteGlobalReplicationGroup = "DeleteGlobalReplicationGroup"
}
export declare enum PostDeleteGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDeleteGlobalReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteGlobalReplicationGroupActionEnum;
    version: PostDeleteGlobalReplicationGroupVersionEnum;
}
export declare class PostDeleteGlobalReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteGlobalReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteGlobalReplicationGroupQueryParams;
    headers: PostDeleteGlobalReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
