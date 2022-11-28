import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddTagsActionEnum {
    AddTags = "AddTags"
}
export declare enum PostAddTagsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostAddTagsQueryParams extends SpeakeasyBase {
    action: PostAddTagsActionEnum;
    version: PostAddTagsVersionEnum;
}
export declare class PostAddTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddTagsRequest extends SpeakeasyBase {
    queryParams: PostAddTagsQueryParams;
    headers: PostAddTagsHeaders;
    request?: Uint8Array;
}
export declare class PostAddTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
