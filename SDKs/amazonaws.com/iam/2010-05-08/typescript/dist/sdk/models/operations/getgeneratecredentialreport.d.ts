import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGenerateCredentialReportActionEnum {
    GenerateCredentialReport = "GenerateCredentialReport"
}
export declare enum GetGenerateCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGenerateCredentialReportQueryParams extends SpeakeasyBase {
    action: GetGenerateCredentialReportActionEnum;
    version: GetGenerateCredentialReportVersionEnum;
}
export declare class GetGenerateCredentialReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGenerateCredentialReportRequest extends SpeakeasyBase {
    queryParams: GetGenerateCredentialReportQueryParams;
    headers: GetGenerateCredentialReportHeaders;
}
export declare class GetGenerateCredentialReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
