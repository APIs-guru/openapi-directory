import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateServerCertificateActionEnum {
    UpdateServerCertificate = "UpdateServerCertificate"
}
export declare enum PostUpdateServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateServerCertificateQueryParams extends SpeakeasyBase {
    action: PostUpdateServerCertificateActionEnum;
    version: PostUpdateServerCertificateVersionEnum;
}
export declare class PostUpdateServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateServerCertificateRequest extends SpeakeasyBase {
    queryParams: PostUpdateServerCertificateQueryParams;
    headers: PostUpdateServerCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
