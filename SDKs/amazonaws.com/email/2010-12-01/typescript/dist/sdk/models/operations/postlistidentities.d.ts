import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListIdentitiesActionEnum {
    ListIdentities = "ListIdentities"
}
export declare enum PostListIdentitiesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListIdentitiesQueryParams extends SpeakeasyBase {
    action: PostListIdentitiesActionEnum;
    maxItems?: string;
    nextToken?: string;
    version: PostListIdentitiesVersionEnum;
}
export declare class PostListIdentitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListIdentitiesRequest extends SpeakeasyBase {
    queryParams: PostListIdentitiesQueryParams;
    headers: PostListIdentitiesHeaders;
    request?: Uint8Array;
}
export declare class PostListIdentitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
