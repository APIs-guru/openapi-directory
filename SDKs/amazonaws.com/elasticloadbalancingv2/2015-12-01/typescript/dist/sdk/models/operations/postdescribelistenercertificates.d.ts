import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeListenerCertificatesActionEnum {
    DescribeListenerCertificates = "DescribeListenerCertificates"
}
export declare enum PostDescribeListenerCertificatesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDescribeListenerCertificatesQueryParams extends SpeakeasyBase {
    action: PostDescribeListenerCertificatesActionEnum;
    version: PostDescribeListenerCertificatesVersionEnum;
}
export declare class PostDescribeListenerCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeListenerCertificatesRequest extends SpeakeasyBase {
    queryParams: PostDescribeListenerCertificatesQueryParams;
    headers: PostDescribeListenerCertificatesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeListenerCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
