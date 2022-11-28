import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisassociateEnclaveCertificateIamRoleActionEnum {
    DisassociateEnclaveCertificateIamRole = "DisassociateEnclaveCertificateIamRole"
}
export declare enum GetDisassociateEnclaveCertificateIamRoleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateEnclaveCertificateIamRoleQueryParams extends SpeakeasyBase {
    action: GetDisassociateEnclaveCertificateIamRoleActionEnum;
    certificateArn?: string;
    dryRun?: boolean;
    roleArn?: string;
    version: GetDisassociateEnclaveCertificateIamRoleVersionEnum;
}
export declare class GetDisassociateEnclaveCertificateIamRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
    queryParams: GetDisassociateEnclaveCertificateIamRoleQueryParams;
    headers: GetDisassociateEnclaveCertificateIamRoleHeaders;
}
export declare class GetDisassociateEnclaveCertificateIamRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
