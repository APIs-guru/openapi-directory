import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisassociateEnvironmentOperationsRoleActionEnum {
    DisassociateEnvironmentOperationsRole = "DisassociateEnvironmentOperationsRole"
}
export declare enum GetDisassociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDisassociateEnvironmentOperationsRoleQueryParams extends SpeakeasyBase {
    action: GetDisassociateEnvironmentOperationsRoleActionEnum;
    environmentName: string;
    version: GetDisassociateEnvironmentOperationsRoleVersionEnum;
}
export declare class GetDisassociateEnvironmentOperationsRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
    queryParams: GetDisassociateEnvironmentOperationsRoleQueryParams;
    headers: GetDisassociateEnvironmentOperationsRoleHeaders;
}
export declare class GetDisassociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
