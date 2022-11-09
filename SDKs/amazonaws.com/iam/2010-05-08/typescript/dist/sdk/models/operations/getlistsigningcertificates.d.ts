import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListSigningCertificatesActionEnum {
    ListSigningCertificates = "ListSigningCertificates"
}
export declare enum GetListSigningCertificatesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListSigningCertificatesQueryParams extends SpeakeasyBase {
    action: GetListSigningCertificatesActionEnum;
    marker?: string;
    maxItems?: number;
    userName?: string;
    version: GetListSigningCertificatesVersionEnum;
}
export declare class GetListSigningCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListSigningCertificatesRequest extends SpeakeasyBase {
    queryParams: GetListSigningCertificatesQueryParams;
    headers: GetListSigningCertificatesHeaders;
}
export declare class GetListSigningCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
