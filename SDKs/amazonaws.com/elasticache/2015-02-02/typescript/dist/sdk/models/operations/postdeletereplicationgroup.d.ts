import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteReplicationGroupActionEnum {
    DeleteReplicationGroup = "DeleteReplicationGroup"
}
export declare enum PostDeleteReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDeleteReplicationGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteReplicationGroupActionEnum;
    version: PostDeleteReplicationGroupVersionEnum;
}
export declare class PostDeleteReplicationGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteReplicationGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteReplicationGroupQueryParams;
    headers: PostDeleteReplicationGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
