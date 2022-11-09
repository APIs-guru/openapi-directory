import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteCacheSecurityGroupActionEnum {
    DeleteCacheSecurityGroup = "DeleteCacheSecurityGroup"
}
export declare enum PostDeleteCacheSecurityGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDeleteCacheSecurityGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteCacheSecurityGroupActionEnum;
    version: PostDeleteCacheSecurityGroupVersionEnum;
}
export declare class PostDeleteCacheSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteCacheSecurityGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteCacheSecurityGroupQueryParams;
    headers: PostDeleteCacheSecurityGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteCacheSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
