import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListUsersActionEnum {
    ListUsers = "ListUsers"
}
export declare enum PostListUsersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListUsersQueryParams extends SpeakeasyBase {
    action: PostListUsersActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListUsersVersionEnum;
}
export declare class PostListUsersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListUsersRequest extends SpeakeasyBase {
    queryParams: PostListUsersQueryParams;
    headers: PostListUsersHeaders;
    request?: Uint8Array;
}
export declare class PostListUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
