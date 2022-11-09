import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUntagServerCertificateActionEnum {
    UntagServerCertificate = "UntagServerCertificate"
}
export declare enum PostUntagServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUntagServerCertificateQueryParams extends SpeakeasyBase {
    action: PostUntagServerCertificateActionEnum;
    version: PostUntagServerCertificateVersionEnum;
}
export declare class PostUntagServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUntagServerCertificateRequest extends SpeakeasyBase {
    queryParams: PostUntagServerCertificateQueryParams;
    headers: PostUntagServerCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostUntagServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
