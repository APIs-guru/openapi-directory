import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddListenerCertificatesActionEnum {
    AddListenerCertificates = "AddListenerCertificates"
}
export declare enum PostAddListenerCertificatesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostAddListenerCertificatesQueryParams extends SpeakeasyBase {
    action: PostAddListenerCertificatesActionEnum;
    version: PostAddListenerCertificatesVersionEnum;
}
export declare class PostAddListenerCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddListenerCertificatesRequest extends SpeakeasyBase {
    queryParams: PostAddListenerCertificatesQueryParams;
    headers: PostAddListenerCertificatesHeaders;
    request?: Uint8Array;
}
export declare class PostAddListenerCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
