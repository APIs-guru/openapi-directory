import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateContributorInsightsXAmzTargetEnum {
    DynamoDb20120810UpdateContributorInsights = "DynamoDB_20120810.UpdateContributorInsights"
}
export declare class UpdateContributorInsightsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContributorInsightsXAmzTargetEnum;
}
export declare class UpdateContributorInsightsRequest extends SpeakeasyBase {
    headers: UpdateContributorInsightsHeaders;
    request: shared.UpdateContributorInsightsInput;
}
export declare class UpdateContributorInsightsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateContributorInsightsOutput?: shared.UpdateContributorInsightsOutput;
}
