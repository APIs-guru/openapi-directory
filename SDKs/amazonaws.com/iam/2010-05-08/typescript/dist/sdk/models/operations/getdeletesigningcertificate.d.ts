import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteSigningCertificateActionEnum {
    DeleteSigningCertificate = "DeleteSigningCertificate"
}
export declare enum GetDeleteSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteSigningCertificateQueryParams extends SpeakeasyBase {
    action: GetDeleteSigningCertificateActionEnum;
    certificateId: string;
    userName?: string;
    version: GetDeleteSigningCertificateVersionEnum;
}
export declare class GetDeleteSigningCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSigningCertificateRequest extends SpeakeasyBase {
    queryParams: GetDeleteSigningCertificateQueryParams;
    headers: GetDeleteSigningCertificateHeaders;
}
export declare class GetDeleteSigningCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
