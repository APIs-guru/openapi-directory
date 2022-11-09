import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteRoleActionEnum {
    DeleteRole = "DeleteRole"
}
export declare enum GetDeleteRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteRoleQueryParams extends SpeakeasyBase {
    action: GetDeleteRoleActionEnum;
    roleName: string;
    version: GetDeleteRoleVersionEnum;
}
export declare class GetDeleteRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteRoleRequest extends SpeakeasyBase {
    queryParams: GetDeleteRoleQueryParams;
    headers: GetDeleteRoleHeaders;
}
export declare class GetDeleteRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
