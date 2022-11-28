import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateServerCertificateActionEnum {
    UpdateServerCertificate = "UpdateServerCertificate"
}
export declare enum GetUpdateServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateServerCertificateQueryParams extends SpeakeasyBase {
    action: GetUpdateServerCertificateActionEnum;
    newPath?: string;
    newServerCertificateName?: string;
    serverCertificateName: string;
    version: GetUpdateServerCertificateVersionEnum;
}
export declare class GetUpdateServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateServerCertificateRequest extends SpeakeasyBase {
    queryParams: GetUpdateServerCertificateQueryParams;
    headers: GetUpdateServerCertificateHeaders;
}
export declare class GetUpdateServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
