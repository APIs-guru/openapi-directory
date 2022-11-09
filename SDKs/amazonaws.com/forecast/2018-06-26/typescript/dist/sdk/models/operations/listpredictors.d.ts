import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPredictorsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPredictorsXAmzTargetEnum {
    AmazonForecastListPredictors = "AmazonForecast.ListPredictors"
}
export declare class ListPredictorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPredictorsXAmzTargetEnum;
}
export declare class ListPredictorsRequest extends SpeakeasyBase {
    queryParams: ListPredictorsQueryParams;
    headers: ListPredictorsHeaders;
    request: shared.ListPredictorsRequest;
}
export declare class ListPredictorsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listPredictorsResponse?: shared.ListPredictorsResponse;
    statusCode: number;
}
