import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListInstanceProfilesActionEnum {
    ListInstanceProfiles = "ListInstanceProfiles"
}
export declare enum PostListInstanceProfilesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListInstanceProfilesQueryParams extends SpeakeasyBase {
    action: PostListInstanceProfilesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListInstanceProfilesVersionEnum;
}
export declare class PostListInstanceProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListInstanceProfilesRequest extends SpeakeasyBase {
    queryParams: PostListInstanceProfilesQueryParams;
    headers: PostListInstanceProfilesHeaders;
    request?: Uint8Array;
}
export declare class PostListInstanceProfilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
