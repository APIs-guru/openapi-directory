import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAddRoleToInstanceProfileActionEnum {
    AddRoleToInstanceProfile = "AddRoleToInstanceProfile"
}
export declare enum GetAddRoleToInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetAddRoleToInstanceProfileQueryParams extends SpeakeasyBase {
    action: GetAddRoleToInstanceProfileActionEnum;
    instanceProfileName: string;
    roleName: string;
    version: GetAddRoleToInstanceProfileVersionEnum;
}
export declare class GetAddRoleToInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAddRoleToInstanceProfileRequest extends SpeakeasyBase {
    queryParams: GetAddRoleToInstanceProfileQueryParams;
    headers: GetAddRoleToInstanceProfileHeaders;
}
export declare class GetAddRoleToInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
