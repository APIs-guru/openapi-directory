import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUploadSigningCertificateActionEnum {
    UploadSigningCertificate = "UploadSigningCertificate"
}
export declare enum GetUploadSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUploadSigningCertificateQueryParams extends SpeakeasyBase {
    action: GetUploadSigningCertificateActionEnum;
    certificateBody: string;
    userName?: string;
    version: GetUploadSigningCertificateVersionEnum;
}
export declare class GetUploadSigningCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUploadSigningCertificateRequest extends SpeakeasyBase {
    queryParams: GetUploadSigningCertificateQueryParams;
    headers: GetUploadSigningCertificateHeaders;
}
export declare class GetUploadSigningCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
