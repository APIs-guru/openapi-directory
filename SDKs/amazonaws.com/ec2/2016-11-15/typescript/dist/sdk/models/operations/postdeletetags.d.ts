import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteTagsActionEnum {
    DeleteTags = "DeleteTags"
}
export declare enum PostDeleteTagsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTagsQueryParams extends SpeakeasyBase {
    action: PostDeleteTagsActionEnum;
    version: PostDeleteTagsVersionEnum;
}
export declare class PostDeleteTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTagsRequest extends SpeakeasyBase {
    queryParams: PostDeleteTagsQueryParams;
    headers: PostDeleteTagsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
