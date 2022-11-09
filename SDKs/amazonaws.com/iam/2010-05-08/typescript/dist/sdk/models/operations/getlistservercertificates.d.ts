import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListServerCertificatesActionEnum {
    ListServerCertificates = "ListServerCertificates"
}
export declare enum GetListServerCertificatesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListServerCertificatesQueryParams extends SpeakeasyBase {
    action: GetListServerCertificatesActionEnum;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    version: GetListServerCertificatesVersionEnum;
}
export declare class GetListServerCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListServerCertificatesRequest extends SpeakeasyBase {
    queryParams: GetListServerCertificatesQueryParams;
    headers: GetListServerCertificatesHeaders;
}
export declare class GetListServerCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
