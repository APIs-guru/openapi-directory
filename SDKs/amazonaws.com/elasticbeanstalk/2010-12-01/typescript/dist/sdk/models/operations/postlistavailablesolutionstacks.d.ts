import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListAvailableSolutionStacksActionEnum {
    ListAvailableSolutionStacks = "ListAvailableSolutionStacks"
}
export declare enum PostListAvailableSolutionStacksVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListAvailableSolutionStacksQueryParams extends SpeakeasyBase {
    action: PostListAvailableSolutionStacksActionEnum;
    version: PostListAvailableSolutionStacksVersionEnum;
}
export declare class PostListAvailableSolutionStacksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListAvailableSolutionStacksRequest extends SpeakeasyBase {
    queryParams: PostListAvailableSolutionStacksQueryParams;
    headers: PostListAvailableSolutionStacksHeaders;
}
export declare class PostListAvailableSolutionStacksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
