import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateSigningCertificateActionEnum {
    UpdateSigningCertificate = "UpdateSigningCertificate"
}
export declare enum PostUpdateSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateSigningCertificateQueryParams extends SpeakeasyBase {
    action: PostUpdateSigningCertificateActionEnum;
    version: PostUpdateSigningCertificateVersionEnum;
}
export declare class PostUpdateSigningCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateSigningCertificateRequest extends SpeakeasyBase {
    queryParams: PostUpdateSigningCertificateQueryParams;
    headers: PostUpdateSigningCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateSigningCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
