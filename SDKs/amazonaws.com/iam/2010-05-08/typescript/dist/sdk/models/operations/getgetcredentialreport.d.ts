import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetCredentialReportActionEnum {
    GetCredentialReport = "GetCredentialReport"
}
export declare enum GetGetCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetCredentialReportQueryParams extends SpeakeasyBase {
    action: GetGetCredentialReportActionEnum;
    version: GetGetCredentialReportVersionEnum;
}
export declare class GetGetCredentialReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetCredentialReportRequest extends SpeakeasyBase {
    queryParams: GetGetCredentialReportQueryParams;
    headers: GetGetCredentialReportHeaders;
}
export declare class GetGetCredentialReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
