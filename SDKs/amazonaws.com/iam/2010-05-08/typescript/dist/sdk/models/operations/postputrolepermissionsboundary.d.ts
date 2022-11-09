import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutRolePermissionsBoundaryActionEnum {
    PutRolePermissionsBoundary = "PutRolePermissionsBoundary"
}
export declare enum PostPutRolePermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostPutRolePermissionsBoundaryQueryParams extends SpeakeasyBase {
    action: PostPutRolePermissionsBoundaryActionEnum;
    version: PostPutRolePermissionsBoundaryVersionEnum;
}
export declare class PostPutRolePermissionsBoundaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutRolePermissionsBoundaryRequest extends SpeakeasyBase {
    queryParams: PostPutRolePermissionsBoundaryQueryParams;
    headers: PostPutRolePermissionsBoundaryHeaders;
    request?: Uint8Array;
}
export declare class PostPutRolePermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
