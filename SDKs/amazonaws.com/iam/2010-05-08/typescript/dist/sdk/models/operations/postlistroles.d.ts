import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListRolesActionEnum {
    ListRoles = "ListRoles"
}
export declare enum PostListRolesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListRolesQueryParams extends SpeakeasyBase {
    action: PostListRolesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListRolesVersionEnum;
}
export declare class PostListRolesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListRolesRequest extends SpeakeasyBase {
    queryParams: PostListRolesQueryParams;
    headers: PostListRolesHeaders;
    request?: Uint8Array;
}
export declare class PostListRolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
