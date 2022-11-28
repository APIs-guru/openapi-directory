import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRemoveRoleFromInstanceProfileActionEnum {
    RemoveRoleFromInstanceProfile = "RemoveRoleFromInstanceProfile"
}
export declare enum GetRemoveRoleFromInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetRemoveRoleFromInstanceProfileQueryParams extends SpeakeasyBase {
    action: GetRemoveRoleFromInstanceProfileActionEnum;
    instanceProfileName: string;
    roleName: string;
    version: GetRemoveRoleFromInstanceProfileVersionEnum;
}
export declare class GetRemoveRoleFromInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemoveRoleFromInstanceProfileRequest extends SpeakeasyBase {
    queryParams: GetRemoveRoleFromInstanceProfileQueryParams;
    headers: GetRemoveRoleFromInstanceProfileHeaders;
}
export declare class GetRemoveRoleFromInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
