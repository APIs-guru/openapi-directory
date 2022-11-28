import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRemoveTagsActionEnum {
    RemoveTags = "RemoveTags"
}
export declare enum PostRemoveTagsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostRemoveTagsQueryParams extends SpeakeasyBase {
    action: PostRemoveTagsActionEnum;
    version: PostRemoveTagsVersionEnum;
}
export declare class PostRemoveTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveTagsRequest extends SpeakeasyBase {
    queryParams: PostRemoveTagsQueryParams;
    headers: PostRemoveTagsHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
