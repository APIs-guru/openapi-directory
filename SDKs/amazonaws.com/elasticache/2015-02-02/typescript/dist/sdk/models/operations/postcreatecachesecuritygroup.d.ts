import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateCacheSecurityGroupActionEnum {
    CreateCacheSecurityGroup = "CreateCacheSecurityGroup"
}
export declare enum PostCreateCacheSecurityGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCreateCacheSecurityGroupQueryParams extends SpeakeasyBase {
    action: PostCreateCacheSecurityGroupActionEnum;
    version: PostCreateCacheSecurityGroupVersionEnum;
}
export declare class PostCreateCacheSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateCacheSecurityGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateCacheSecurityGroupQueryParams;
    headers: PostCreateCacheSecurityGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateCacheSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
