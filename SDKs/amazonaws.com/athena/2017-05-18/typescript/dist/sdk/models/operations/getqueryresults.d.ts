import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryResultsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetQueryResultsXAmzTargetEnum {
    AmazonAthenaGetQueryResults = "AmazonAthena.GetQueryResults"
}
export declare class GetQueryResultsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQueryResultsXAmzTargetEnum;
}
export declare class GetQueryResultsRequest extends SpeakeasyBase {
    queryParams: GetQueryResultsQueryParams;
    headers: GetQueryResultsHeaders;
    request: shared.GetQueryResultsInput;
}
export declare class GetQueryResultsResponse extends SpeakeasyBase {
    contentType: string;
    getQueryResultsOutput?: shared.GetQueryResultsOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
