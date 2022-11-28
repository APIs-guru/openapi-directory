import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateTagsForResourceActionEnum {
    UpdateTagsForResource = "UpdateTagsForResource"
}
export declare enum PostUpdateTagsForResourceVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateTagsForResourceQueryParams extends SpeakeasyBase {
    action: PostUpdateTagsForResourceActionEnum;
    version: PostUpdateTagsForResourceVersionEnum;
}
export declare class PostUpdateTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateTagsForResourceRequest extends SpeakeasyBase {
    queryParams: PostUpdateTagsForResourceQueryParams;
    headers: PostUpdateTagsForResourceHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateTagsForResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
