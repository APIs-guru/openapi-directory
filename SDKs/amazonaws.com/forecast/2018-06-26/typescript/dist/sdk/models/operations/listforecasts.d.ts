import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListForecastsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListForecastsXAmzTargetEnum {
    AmazonForecastListForecasts = "AmazonForecast.ListForecasts"
}
export declare class ListForecastsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListForecastsXAmzTargetEnum;
}
export declare class ListForecastsRequest extends SpeakeasyBase {
    queryParams: ListForecastsQueryParams;
    headers: ListForecastsHeaders;
    request: shared.ListForecastsRequest;
}
export declare class ListForecastsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listForecastsResponse?: shared.ListForecastsResponse;
    statusCode: number;
}
