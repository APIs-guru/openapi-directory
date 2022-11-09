import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGenerateOrganizationsAccessReportActionEnum {
    GenerateOrganizationsAccessReport = "GenerateOrganizationsAccessReport"
}
export declare enum GetGenerateOrganizationsAccessReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGenerateOrganizationsAccessReportQueryParams extends SpeakeasyBase {
    action: GetGenerateOrganizationsAccessReportActionEnum;
    entityPath: string;
    organizationsPolicyId?: string;
    version: GetGenerateOrganizationsAccessReportVersionEnum;
}
export declare class GetGenerateOrganizationsAccessReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGenerateOrganizationsAccessReportRequest extends SpeakeasyBase {
    queryParams: GetGenerateOrganizationsAccessReportQueryParams;
    headers: GetGenerateOrganizationsAccessReportHeaders;
}
export declare class GetGenerateOrganizationsAccessReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
