import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPutRolePermissionsBoundaryActionEnum {
    PutRolePermissionsBoundary = "PutRolePermissionsBoundary"
}
export declare enum GetPutRolePermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetPutRolePermissionsBoundaryQueryParams extends SpeakeasyBase {
    action: GetPutRolePermissionsBoundaryActionEnum;
    permissionsBoundary: string;
    roleName: string;
    version: GetPutRolePermissionsBoundaryVersionEnum;
}
export declare class GetPutRolePermissionsBoundaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutRolePermissionsBoundaryRequest extends SpeakeasyBase {
    queryParams: GetPutRolePermissionsBoundaryQueryParams;
    headers: GetPutRolePermissionsBoundaryHeaders;
}
export declare class GetPutRolePermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
