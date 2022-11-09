import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteUserPermissionsBoundaryActionEnum {
    DeleteUserPermissionsBoundary = "DeleteUserPermissionsBoundary"
}
export declare enum PostDeleteUserPermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteUserPermissionsBoundaryQueryParams extends SpeakeasyBase {
    action: PostDeleteUserPermissionsBoundaryActionEnum;
    version: PostDeleteUserPermissionsBoundaryVersionEnum;
}
export declare class PostDeleteUserPermissionsBoundaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteUserPermissionsBoundaryRequest extends SpeakeasyBase {
    queryParams: PostDeleteUserPermissionsBoundaryQueryParams;
    headers: PostDeleteUserPermissionsBoundaryHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteUserPermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
