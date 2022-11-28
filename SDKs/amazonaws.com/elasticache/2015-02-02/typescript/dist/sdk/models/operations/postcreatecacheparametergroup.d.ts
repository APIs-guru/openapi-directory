import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateCacheParameterGroupActionEnum {
    CreateCacheParameterGroup = "CreateCacheParameterGroup"
}
export declare enum PostCreateCacheParameterGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCreateCacheParameterGroupQueryParams extends SpeakeasyBase {
    action: PostCreateCacheParameterGroupActionEnum;
    version: PostCreateCacheParameterGroupVersionEnum;
}
export declare class PostCreateCacheParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateCacheParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateCacheParameterGroupQueryParams;
    headers: PostCreateCacheParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateCacheParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
