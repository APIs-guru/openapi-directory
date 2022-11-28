import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPredictorBacktestExportJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPredictorBacktestExportJobsXAmzTargetEnum {
    AmazonForecastListPredictorBacktestExportJobs = "AmazonForecast.ListPredictorBacktestExportJobs"
}
export declare class ListPredictorBacktestExportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPredictorBacktestExportJobsXAmzTargetEnum;
}
export declare class ListPredictorBacktestExportJobsRequest extends SpeakeasyBase {
    queryParams: ListPredictorBacktestExportJobsQueryParams;
    headers: ListPredictorBacktestExportJobsHeaders;
    request: shared.ListPredictorBacktestExportJobsRequest;
}
export declare class ListPredictorBacktestExportJobsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listPredictorBacktestExportJobsResponse?: shared.ListPredictorBacktestExportJobsResponse;
    statusCode: number;
}
