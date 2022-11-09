import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListInstanceProfilesForRoleActionEnum {
    ListInstanceProfilesForRole = "ListInstanceProfilesForRole"
}
export declare enum GetListInstanceProfilesForRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListInstanceProfilesForRoleQueryParams extends SpeakeasyBase {
    action: GetListInstanceProfilesForRoleActionEnum;
    marker?: string;
    maxItems?: number;
    roleName: string;
    version: GetListInstanceProfilesForRoleVersionEnum;
}
export declare class GetListInstanceProfilesForRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListInstanceProfilesForRoleRequest extends SpeakeasyBase {
    queryParams: GetListInstanceProfilesForRoleQueryParams;
    headers: GetListInstanceProfilesForRoleHeaders;
}
export declare class GetListInstanceProfilesForRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
