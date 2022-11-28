import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteServiceLinkedRoleActionEnum {
    DeleteServiceLinkedRole = "DeleteServiceLinkedRole"
}
export declare enum GetDeleteServiceLinkedRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteServiceLinkedRoleQueryParams extends SpeakeasyBase {
    action: GetDeleteServiceLinkedRoleActionEnum;
    roleName: string;
    version: GetDeleteServiceLinkedRoleVersionEnum;
}
export declare class GetDeleteServiceLinkedRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteServiceLinkedRoleRequest extends SpeakeasyBase {
    queryParams: GetDeleteServiceLinkedRoleQueryParams;
    headers: GetDeleteServiceLinkedRoleHeaders;
}
export declare class GetDeleteServiceLinkedRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
