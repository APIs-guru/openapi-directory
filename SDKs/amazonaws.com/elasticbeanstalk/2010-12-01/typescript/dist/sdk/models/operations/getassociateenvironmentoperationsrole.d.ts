import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAssociateEnvironmentOperationsRoleActionEnum {
    AssociateEnvironmentOperationsRole = "AssociateEnvironmentOperationsRole"
}
export declare enum GetAssociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetAssociateEnvironmentOperationsRoleQueryParams extends SpeakeasyBase {
    action: GetAssociateEnvironmentOperationsRoleActionEnum;
    environmentName: string;
    operationsRole: string;
    version: GetAssociateEnvironmentOperationsRoleVersionEnum;
}
export declare class GetAssociateEnvironmentOperationsRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
    queryParams: GetAssociateEnvironmentOperationsRoleQueryParams;
    headers: GetAssociateEnvironmentOperationsRoleHeaders;
}
export declare class GetAssociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
