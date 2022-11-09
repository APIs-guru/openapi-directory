import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetServerCertificateActionEnum {
    GetServerCertificate = "GetServerCertificate"
}
export declare enum PostGetServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetServerCertificateQueryParams extends SpeakeasyBase {
    action: PostGetServerCertificateActionEnum;
    version: PostGetServerCertificateVersionEnum;
}
export declare class PostGetServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetServerCertificateRequest extends SpeakeasyBase {
    queryParams: PostGetServerCertificateQueryParams;
    headers: PostGetServerCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostGetServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
