import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFhirImportJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFhirImportJobsXAmzTargetEnum {
    HealthLakeListFhirImportJobs = "HealthLake.ListFHIRImportJobs"
}
export declare class ListFhirImportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFhirImportJobsXAmzTargetEnum;
}
export declare class ListFhirImportJobsRequest extends SpeakeasyBase {
    queryParams: ListFhirImportJobsQueryParams;
    headers: ListFhirImportJobsHeaders;
    request: shared.ListFhirImportJobsRequest;
}
export declare class ListFhirImportJobsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listFhirImportJobsResponse?: shared.ListFhirImportJobsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
