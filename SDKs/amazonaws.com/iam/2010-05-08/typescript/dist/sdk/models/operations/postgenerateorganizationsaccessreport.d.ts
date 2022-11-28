import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGenerateOrganizationsAccessReportActionEnum {
    GenerateOrganizationsAccessReport = "GenerateOrganizationsAccessReport"
}
export declare enum PostGenerateOrganizationsAccessReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGenerateOrganizationsAccessReportQueryParams extends SpeakeasyBase {
    action: PostGenerateOrganizationsAccessReportActionEnum;
    version: PostGenerateOrganizationsAccessReportVersionEnum;
}
export declare class PostGenerateOrganizationsAccessReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGenerateOrganizationsAccessReportRequest extends SpeakeasyBase {
    queryParams: PostGenerateOrganizationsAccessReportQueryParams;
    headers: PostGenerateOrganizationsAccessReportHeaders;
    request?: Uint8Array;
}
export declare class PostGenerateOrganizationsAccessReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
