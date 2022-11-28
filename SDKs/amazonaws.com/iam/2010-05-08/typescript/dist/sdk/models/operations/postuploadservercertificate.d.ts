import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUploadServerCertificateActionEnum {
    UploadServerCertificate = "UploadServerCertificate"
}
export declare enum PostUploadServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUploadServerCertificateQueryParams extends SpeakeasyBase {
    action: PostUploadServerCertificateActionEnum;
    version: PostUploadServerCertificateVersionEnum;
}
export declare class PostUploadServerCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUploadServerCertificateRequest extends SpeakeasyBase {
    queryParams: PostUploadServerCertificateQueryParams;
    headers: PostUploadServerCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostUploadServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
