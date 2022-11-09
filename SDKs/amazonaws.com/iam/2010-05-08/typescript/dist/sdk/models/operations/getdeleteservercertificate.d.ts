import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteServerCertificateActionEnum {
    DeleteServerCertificate = "DeleteServerCertificate"
}
export declare enum GetDeleteServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteServerCertificateQueryParams extends SpeakeasyBase {
    action: GetDeleteServerCertificateActionEnum;
    serverCertificateName: string;
    version: GetDeleteServerCertificateVersionEnum;
}
export declare class GetDeleteServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteServerCertificateRequest extends SpeakeasyBase {
    queryParams: GetDeleteServerCertificateQueryParams;
    headers: GetDeleteServerCertificateHeaders;
}
export declare class GetDeleteServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
