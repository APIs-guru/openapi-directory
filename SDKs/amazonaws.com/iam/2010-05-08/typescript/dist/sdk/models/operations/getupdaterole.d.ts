import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateRoleActionEnum {
    UpdateRole = "UpdateRole"
}
export declare enum GetUpdateRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateRoleQueryParams extends SpeakeasyBase {
    action: GetUpdateRoleActionEnum;
    description?: string;
    maxSessionDuration?: number;
    roleName: string;
    version: GetUpdateRoleVersionEnum;
}
export declare class GetUpdateRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateRoleRequest extends SpeakeasyBase {
    queryParams: GetUpdateRoleQueryParams;
    headers: GetUpdateRoleHeaders;
}
export declare class GetUpdateRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
