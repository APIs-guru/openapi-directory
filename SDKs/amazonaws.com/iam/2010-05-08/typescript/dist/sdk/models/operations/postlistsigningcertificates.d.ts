import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListSigningCertificatesActionEnum {
    ListSigningCertificates = "ListSigningCertificates"
}
export declare enum PostListSigningCertificatesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListSigningCertificatesQueryParams extends SpeakeasyBase {
    action: PostListSigningCertificatesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListSigningCertificatesVersionEnum;
}
export declare class PostListSigningCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListSigningCertificatesRequest extends SpeakeasyBase {
    queryParams: PostListSigningCertificatesQueryParams;
    headers: PostListSigningCertificatesHeaders;
    request?: Uint8Array;
}
export declare class PostListSigningCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
