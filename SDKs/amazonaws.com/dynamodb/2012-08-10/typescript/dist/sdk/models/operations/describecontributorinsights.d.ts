import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeContributorInsightsXAmzTargetEnum {
    DynamoDb20120810DescribeContributorInsights = "DynamoDB_20120810.DescribeContributorInsights"
}
export declare class DescribeContributorInsightsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContributorInsightsXAmzTargetEnum;
}
export declare class DescribeContributorInsightsRequest extends SpeakeasyBase {
    headers: DescribeContributorInsightsHeaders;
    request: shared.DescribeContributorInsightsInput;
}
export declare class DescribeContributorInsightsResponse extends SpeakeasyBase {
    contentType: string;
    describeContributorInsightsOutput?: shared.DescribeContributorInsightsOutput;
    internalServerError?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
