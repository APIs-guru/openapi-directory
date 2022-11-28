import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeListenerCertificatesActionEnum {
    DescribeListenerCertificates = "DescribeListenerCertificates"
}
export declare enum GetDescribeListenerCertificatesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetDescribeListenerCertificatesQueryParams extends SpeakeasyBase {
    action: GetDescribeListenerCertificatesActionEnum;
    listenerArn: string;
    marker?: string;
    pageSize?: number;
    version: GetDescribeListenerCertificatesVersionEnum;
}
export declare class GetDescribeListenerCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeListenerCertificatesRequest extends SpeakeasyBase {
    queryParams: GetDescribeListenerCertificatesQueryParams;
    headers: GetDescribeListenerCertificatesHeaders;
}
export declare class GetDescribeListenerCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
