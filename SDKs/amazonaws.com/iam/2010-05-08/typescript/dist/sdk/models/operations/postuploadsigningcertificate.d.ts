import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUploadSigningCertificateActionEnum {
    UploadSigningCertificate = "UploadSigningCertificate"
}
export declare enum PostUploadSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUploadSigningCertificateQueryParams extends SpeakeasyBase {
    action: PostUploadSigningCertificateActionEnum;
    version: PostUploadSigningCertificateVersionEnum;
}
export declare class PostUploadSigningCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUploadSigningCertificateRequest extends SpeakeasyBase {
    queryParams: PostUploadSigningCertificateQueryParams;
    headers: PostUploadSigningCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostUploadSigningCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
