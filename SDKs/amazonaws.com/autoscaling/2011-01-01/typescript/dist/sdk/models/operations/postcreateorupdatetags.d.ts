import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateOrUpdateTagsActionEnum {
    CreateOrUpdateTags = "CreateOrUpdateTags"
}
export declare enum PostCreateOrUpdateTagsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostCreateOrUpdateTagsQueryParams extends SpeakeasyBase {
    action: PostCreateOrUpdateTagsActionEnum;
    version: PostCreateOrUpdateTagsVersionEnum;
}
export declare class PostCreateOrUpdateTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateOrUpdateTagsRequest extends SpeakeasyBase {
    queryParams: PostCreateOrUpdateTagsQueryParams;
    headers: PostCreateOrUpdateTagsHeaders;
    request?: Uint8Array;
}
export declare class PostCreateOrUpdateTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
