import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetServerCertificateActionEnum {
    GetServerCertificate = "GetServerCertificate"
}
export declare enum GetGetServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetServerCertificateQueryParams extends SpeakeasyBase {
    action: GetGetServerCertificateActionEnum;
    serverCertificateName: string;
    version: GetGetServerCertificateVersionEnum;
}
export declare class GetGetServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetServerCertificateRequest extends SpeakeasyBase {
    queryParams: GetGetServerCertificateQueryParams;
    headers: GetGetServerCertificateHeaders;
}
export declare class GetGetServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
