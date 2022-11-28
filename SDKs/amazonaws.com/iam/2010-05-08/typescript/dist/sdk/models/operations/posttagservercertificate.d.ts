import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTagServerCertificateActionEnum {
    TagServerCertificate = "TagServerCertificate"
}
export declare enum PostTagServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostTagServerCertificateQueryParams extends SpeakeasyBase {
    action: PostTagServerCertificateActionEnum;
    version: PostTagServerCertificateVersionEnum;
}
export declare class PostTagServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagServerCertificateRequest extends SpeakeasyBase {
    queryParams: PostTagServerCertificateQueryParams;
    headers: PostTagServerCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostTagServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
