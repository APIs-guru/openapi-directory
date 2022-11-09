import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListServerCertificateTagsActionEnum {
    ListServerCertificateTags = "ListServerCertificateTags"
}
export declare enum PostListServerCertificateTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListServerCertificateTagsQueryParams extends SpeakeasyBase {
    action: PostListServerCertificateTagsActionEnum;
    version: PostListServerCertificateTagsVersionEnum;
}
export declare class PostListServerCertificateTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListServerCertificateTagsRequest extends SpeakeasyBase {
    queryParams: PostListServerCertificateTagsQueryParams;
    headers: PostListServerCertificateTagsHeaders;
    request?: Uint8Array;
}
export declare class PostListServerCertificateTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
