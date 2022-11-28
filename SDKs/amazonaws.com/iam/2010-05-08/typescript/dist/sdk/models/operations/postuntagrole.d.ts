import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUntagRoleActionEnum {
    UntagRole = "UntagRole"
}
export declare enum PostUntagRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUntagRoleQueryParams extends SpeakeasyBase {
    action: PostUntagRoleActionEnum;
    version: PostUntagRoleVersionEnum;
}
export declare class PostUntagRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUntagRoleRequest extends SpeakeasyBase {
    queryParams: PostUntagRoleQueryParams;
    headers: PostUntagRoleHeaders;
    request?: Uint8Array;
}
export declare class PostUntagRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
