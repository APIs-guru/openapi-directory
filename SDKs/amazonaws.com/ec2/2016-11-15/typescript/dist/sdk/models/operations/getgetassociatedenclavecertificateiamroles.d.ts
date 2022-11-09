import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetAssociatedEnclaveCertificateIamRolesActionEnum {
    GetAssociatedEnclaveCertificateIamRoles = "GetAssociatedEnclaveCertificateIamRoles"
}
export declare enum GetGetAssociatedEnclaveCertificateIamRolesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetAssociatedEnclaveCertificateIamRolesQueryParams extends SpeakeasyBase {
    action: GetGetAssociatedEnclaveCertificateIamRolesActionEnum;
    certificateArn?: string;
    dryRun?: boolean;
    version: GetGetAssociatedEnclaveCertificateIamRolesVersionEnum;
}
export declare class GetGetAssociatedEnclaveCertificateIamRolesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetAssociatedEnclaveCertificateIamRolesRequest extends SpeakeasyBase {
    queryParams: GetGetAssociatedEnclaveCertificateIamRolesQueryParams;
    headers: GetGetAssociatedEnclaveCertificateIamRolesHeaders;
}
export declare class GetGetAssociatedEnclaveCertificateIamRolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
