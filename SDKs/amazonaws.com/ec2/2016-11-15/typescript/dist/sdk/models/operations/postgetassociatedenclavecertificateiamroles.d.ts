import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetAssociatedEnclaveCertificateIamRolesActionEnum {
    GetAssociatedEnclaveCertificateIamRoles = "GetAssociatedEnclaveCertificateIamRoles"
}
export declare enum PostGetAssociatedEnclaveCertificateIamRolesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetAssociatedEnclaveCertificateIamRolesQueryParams extends SpeakeasyBase {
    action: PostGetAssociatedEnclaveCertificateIamRolesActionEnum;
    version: PostGetAssociatedEnclaveCertificateIamRolesVersionEnum;
}
export declare class PostGetAssociatedEnclaveCertificateIamRolesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetAssociatedEnclaveCertificateIamRolesRequest extends SpeakeasyBase {
    queryParams: PostGetAssociatedEnclaveCertificateIamRolesQueryParams;
    headers: PostGetAssociatedEnclaveCertificateIamRolesHeaders;
    request?: Uint8Array;
}
export declare class PostGetAssociatedEnclaveCertificateIamRolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
