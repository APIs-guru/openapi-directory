import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetRoleActionEnum {
    GetRole = "GetRole"
}
export declare enum GetGetRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetRoleQueryParams extends SpeakeasyBase {
    action: GetGetRoleActionEnum;
    roleName: string;
    version: GetGetRoleVersionEnum;
}
export declare class GetGetRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetRoleRequest extends SpeakeasyBase {
    queryParams: GetGetRoleQueryParams;
    headers: GetGetRoleHeaders;
}
export declare class GetGetRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
