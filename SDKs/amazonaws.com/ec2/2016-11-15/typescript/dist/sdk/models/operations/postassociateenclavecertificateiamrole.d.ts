import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssociateEnclaveCertificateIamRoleActionEnum {
    AssociateEnclaveCertificateIamRole = "AssociateEnclaveCertificateIamRole"
}
export declare enum PostAssociateEnclaveCertificateIamRoleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateEnclaveCertificateIamRoleQueryParams extends SpeakeasyBase {
    action: PostAssociateEnclaveCertificateIamRoleActionEnum;
    version: PostAssociateEnclaveCertificateIamRoleVersionEnum;
}
export declare class PostAssociateEnclaveCertificateIamRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
    queryParams: PostAssociateEnclaveCertificateIamRoleQueryParams;
    headers: PostAssociateEnclaveCertificateIamRoleHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateEnclaveCertificateIamRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
