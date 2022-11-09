import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListForecastExportJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListForecastExportJobsXAmzTargetEnum {
    AmazonForecastListForecastExportJobs = "AmazonForecast.ListForecastExportJobs"
}
export declare class ListForecastExportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListForecastExportJobsXAmzTargetEnum;
}
export declare class ListForecastExportJobsRequest extends SpeakeasyBase {
    queryParams: ListForecastExportJobsQueryParams;
    headers: ListForecastExportJobsHeaders;
    request: shared.ListForecastExportJobsRequest;
}
export declare class ListForecastExportJobsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listForecastExportJobsResponse?: shared.ListForecastExportJobsResponse;
    statusCode: number;
}
