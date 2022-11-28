import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListInstanceProfilesForRoleActionEnum {
    ListInstanceProfilesForRole = "ListInstanceProfilesForRole"
}
export declare enum PostListInstanceProfilesForRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListInstanceProfilesForRoleQueryParams extends SpeakeasyBase {
    action: PostListInstanceProfilesForRoleActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListInstanceProfilesForRoleVersionEnum;
}
export declare class PostListInstanceProfilesForRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListInstanceProfilesForRoleRequest extends SpeakeasyBase {
    queryParams: PostListInstanceProfilesForRoleQueryParams;
    headers: PostListInstanceProfilesForRoleHeaders;
    request?: Uint8Array;
}
export declare class PostListInstanceProfilesForRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
