import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetOrganizationsAccessReportActionEnum {
    GetOrganizationsAccessReport = "GetOrganizationsAccessReport"
}
export declare enum GetGetOrganizationsAccessReportSortKeyEnum {
    ServiceNamespaceAscending = "SERVICE_NAMESPACE_ASCENDING",
    ServiceNamespaceDescending = "SERVICE_NAMESPACE_DESCENDING",
    LastAuthenticatedTimeAscending = "LAST_AUTHENTICATED_TIME_ASCENDING",
    LastAuthenticatedTimeDescending = "LAST_AUTHENTICATED_TIME_DESCENDING"
}
export declare enum GetGetOrganizationsAccessReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetOrganizationsAccessReportQueryParams extends SpeakeasyBase {
    action: GetGetOrganizationsAccessReportActionEnum;
    jobId: string;
    marker?: string;
    maxItems?: number;
    sortKey?: GetGetOrganizationsAccessReportSortKeyEnum;
    version: GetGetOrganizationsAccessReportVersionEnum;
}
export declare class GetGetOrganizationsAccessReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetOrganizationsAccessReportRequest extends SpeakeasyBase {
    queryParams: GetGetOrganizationsAccessReportQueryParams;
    headers: GetGetOrganizationsAccessReportHeaders;
}
export declare class GetGetOrganizationsAccessReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
