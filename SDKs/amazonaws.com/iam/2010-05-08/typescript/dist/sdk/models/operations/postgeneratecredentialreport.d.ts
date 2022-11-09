import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGenerateCredentialReportActionEnum {
    GenerateCredentialReport = "GenerateCredentialReport"
}
export declare enum PostGenerateCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGenerateCredentialReportQueryParams extends SpeakeasyBase {
    action: PostGenerateCredentialReportActionEnum;
    version: PostGenerateCredentialReportVersionEnum;
}
export declare class PostGenerateCredentialReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGenerateCredentialReportRequest extends SpeakeasyBase {
    queryParams: PostGenerateCredentialReportQueryParams;
    headers: PostGenerateCredentialReportHeaders;
}
export declare class PostGenerateCredentialReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
