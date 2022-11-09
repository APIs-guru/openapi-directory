import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteServerCertificateActionEnum {
    DeleteServerCertificate = "DeleteServerCertificate"
}
export declare enum PostDeleteServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteServerCertificateQueryParams extends SpeakeasyBase {
    action: PostDeleteServerCertificateActionEnum;
    version: PostDeleteServerCertificateVersionEnum;
}
export declare class PostDeleteServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteServerCertificateRequest extends SpeakeasyBase {
    queryParams: PostDeleteServerCertificateQueryParams;
    headers: PostDeleteServerCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
