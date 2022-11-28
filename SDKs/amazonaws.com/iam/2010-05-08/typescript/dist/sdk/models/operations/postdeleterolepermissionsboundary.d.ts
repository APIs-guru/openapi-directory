import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteRolePermissionsBoundaryActionEnum {
    DeleteRolePermissionsBoundary = "DeleteRolePermissionsBoundary"
}
export declare enum PostDeleteRolePermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteRolePermissionsBoundaryQueryParams extends SpeakeasyBase {
    action: PostDeleteRolePermissionsBoundaryActionEnum;
    version: PostDeleteRolePermissionsBoundaryVersionEnum;
}
export declare class PostDeleteRolePermissionsBoundaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteRolePermissionsBoundaryRequest extends SpeakeasyBase {
    queryParams: PostDeleteRolePermissionsBoundaryQueryParams;
    headers: PostDeleteRolePermissionsBoundaryHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteRolePermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
