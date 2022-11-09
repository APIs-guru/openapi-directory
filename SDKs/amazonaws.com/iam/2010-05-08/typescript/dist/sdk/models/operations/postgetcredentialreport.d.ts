import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetCredentialReportActionEnum {
    GetCredentialReport = "GetCredentialReport"
}
export declare enum PostGetCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetCredentialReportQueryParams extends SpeakeasyBase {
    action: PostGetCredentialReportActionEnum;
    version: PostGetCredentialReportVersionEnum;
}
export declare class PostGetCredentialReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetCredentialReportRequest extends SpeakeasyBase {
    queryParams: PostGetCredentialReportQueryParams;
    headers: PostGetCredentialReportHeaders;
}
export declare class PostGetCredentialReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
