import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteSigningCertificateActionEnum {
    DeleteSigningCertificate = "DeleteSigningCertificate"
}
export declare enum PostDeleteSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteSigningCertificateQueryParams extends SpeakeasyBase {
    action: PostDeleteSigningCertificateActionEnum;
    version: PostDeleteSigningCertificateVersionEnum;
}
export declare class PostDeleteSigningCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSigningCertificateRequest extends SpeakeasyBase {
    queryParams: PostDeleteSigningCertificateQueryParams;
    headers: PostDeleteSigningCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSigningCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
