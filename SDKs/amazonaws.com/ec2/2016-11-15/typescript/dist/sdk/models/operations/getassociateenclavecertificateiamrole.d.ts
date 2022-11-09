import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAssociateEnclaveCertificateIamRoleActionEnum {
    AssociateEnclaveCertificateIamRole = "AssociateEnclaveCertificateIamRole"
}
export declare enum GetAssociateEnclaveCertificateIamRoleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateEnclaveCertificateIamRoleQueryParams extends SpeakeasyBase {
    action: GetAssociateEnclaveCertificateIamRoleActionEnum;
    certificateArn?: string;
    dryRun?: boolean;
    roleArn?: string;
    version: GetAssociateEnclaveCertificateIamRoleVersionEnum;
}
export declare class GetAssociateEnclaveCertificateIamRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
    queryParams: GetAssociateEnclaveCertificateIamRoleQueryParams;
    headers: GetAssociateEnclaveCertificateIamRoleHeaders;
}
export declare class GetAssociateEnclaveCertificateIamRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
