import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListGroupsActionEnum {
    ListGroups = "ListGroups"
}
export declare enum PostListGroupsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListGroupsQueryParams extends SpeakeasyBase {
    action: PostListGroupsActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListGroupsVersionEnum;
}
export declare class PostListGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListGroupsRequest extends SpeakeasyBase {
    queryParams: PostListGroupsQueryParams;
    headers: PostListGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostListGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
