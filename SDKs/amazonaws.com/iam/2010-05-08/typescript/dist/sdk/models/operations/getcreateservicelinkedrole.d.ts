import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateServiceLinkedRoleActionEnum {
    CreateServiceLinkedRole = "CreateServiceLinkedRole"
}
export declare enum GetCreateServiceLinkedRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetCreateServiceLinkedRoleQueryParams extends SpeakeasyBase {
    awsServiceName: string;
    action: GetCreateServiceLinkedRoleActionEnum;
    customSuffix?: string;
    description?: string;
    version: GetCreateServiceLinkedRoleVersionEnum;
}
export declare class GetCreateServiceLinkedRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateServiceLinkedRoleRequest extends SpeakeasyBase {
    queryParams: GetCreateServiceLinkedRoleQueryParams;
    headers: GetCreateServiceLinkedRoleHeaders;
}
export declare class GetCreateServiceLinkedRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
