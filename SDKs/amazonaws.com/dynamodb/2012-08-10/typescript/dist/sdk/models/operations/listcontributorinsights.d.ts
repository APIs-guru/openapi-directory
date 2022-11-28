import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListContributorInsightsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListContributorInsightsXAmzTargetEnum {
    DynamoDb20120810ListContributorInsights = "DynamoDB_20120810.ListContributorInsights"
}
export declare class ListContributorInsightsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListContributorInsightsXAmzTargetEnum;
}
export declare class ListContributorInsightsRequest extends SpeakeasyBase {
    queryParams: ListContributorInsightsQueryParams;
    headers: ListContributorInsightsHeaders;
    request: shared.ListContributorInsightsInput;
}
export declare class ListContributorInsightsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listContributorInsightsOutput?: shared.ListContributorInsightsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
