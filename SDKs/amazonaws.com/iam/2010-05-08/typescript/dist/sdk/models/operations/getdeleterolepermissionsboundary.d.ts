import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteRolePermissionsBoundaryActionEnum {
    DeleteRolePermissionsBoundary = "DeleteRolePermissionsBoundary"
}
export declare enum GetDeleteRolePermissionsBoundaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteRolePermissionsBoundaryQueryParams extends SpeakeasyBase {
    action: GetDeleteRolePermissionsBoundaryActionEnum;
    roleName: string;
    version: GetDeleteRolePermissionsBoundaryVersionEnum;
}
export declare class GetDeleteRolePermissionsBoundaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteRolePermissionsBoundaryRequest extends SpeakeasyBase {
    queryParams: GetDeleteRolePermissionsBoundaryQueryParams;
    headers: GetDeleteRolePermissionsBoundaryHeaders;
}
export declare class GetDeleteRolePermissionsBoundaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
