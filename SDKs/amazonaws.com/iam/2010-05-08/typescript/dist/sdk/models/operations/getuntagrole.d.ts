import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUntagRoleActionEnum {
    UntagRole = "UntagRole"
}
export declare enum GetUntagRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUntagRoleQueryParams extends SpeakeasyBase {
    action: GetUntagRoleActionEnum;
    roleName: string;
    tagKeys: string[];
    version: GetUntagRoleVersionEnum;
}
export declare class GetUntagRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagRoleRequest extends SpeakeasyBase {
    queryParams: GetUntagRoleQueryParams;
    headers: GetUntagRoleHeaders;
}
export declare class GetUntagRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
