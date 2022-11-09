import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisassociateEnclaveCertificateIamRoleActionEnum {
    DisassociateEnclaveCertificateIamRole = "DisassociateEnclaveCertificateIamRole"
}
export declare enum PostDisassociateEnclaveCertificateIamRoleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateEnclaveCertificateIamRoleQueryParams extends SpeakeasyBase {
    action: PostDisassociateEnclaveCertificateIamRoleActionEnum;
    version: PostDisassociateEnclaveCertificateIamRoleVersionEnum;
}
export declare class PostDisassociateEnclaveCertificateIamRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
    queryParams: PostDisassociateEnclaveCertificateIamRoleQueryParams;
    headers: PostDisassociateEnclaveCertificateIamRoleHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateEnclaveCertificateIamRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
