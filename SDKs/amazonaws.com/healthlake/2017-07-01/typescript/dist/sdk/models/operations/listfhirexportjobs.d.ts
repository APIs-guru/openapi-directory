import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFhirExportJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFhirExportJobsXAmzTargetEnum {
    HealthLakeListFhirExportJobs = "HealthLake.ListFHIRExportJobs"
}
export declare class ListFhirExportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFhirExportJobsXAmzTargetEnum;
}
export declare class ListFhirExportJobsRequest extends SpeakeasyBase {
    queryParams: ListFhirExportJobsQueryParams;
    headers: ListFhirExportJobsHeaders;
    request: shared.ListFhirExportJobsRequest;
}
export declare class ListFhirExportJobsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listFhirExportJobsResponse?: shared.ListFhirExportJobsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
