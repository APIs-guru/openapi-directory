import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUntagServerCertificateActionEnum {
    UntagServerCertificate = "UntagServerCertificate"
}
export declare enum GetUntagServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUntagServerCertificateQueryParams extends SpeakeasyBase {
    action: GetUntagServerCertificateActionEnum;
    serverCertificateName: string;
    tagKeys: string[];
    version: GetUntagServerCertificateVersionEnum;
}
export declare class GetUntagServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagServerCertificateRequest extends SpeakeasyBase {
    queryParams: GetUntagServerCertificateQueryParams;
    headers: GetUntagServerCertificateHeaders;
}
export declare class GetUntagServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
