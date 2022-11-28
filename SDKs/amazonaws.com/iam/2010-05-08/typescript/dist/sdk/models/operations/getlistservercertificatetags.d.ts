import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListServerCertificateTagsActionEnum {
    ListServerCertificateTags = "ListServerCertificateTags"
}
export declare enum GetListServerCertificateTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListServerCertificateTagsQueryParams extends SpeakeasyBase {
    action: GetListServerCertificateTagsActionEnum;
    marker?: string;
    maxItems?: number;
    serverCertificateName: string;
    version: GetListServerCertificateTagsVersionEnum;
}
export declare class GetListServerCertificateTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListServerCertificateTagsRequest extends SpeakeasyBase {
    queryParams: GetListServerCertificateTagsQueryParams;
    headers: GetListServerCertificateTagsHeaders;
}
export declare class GetListServerCertificateTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
