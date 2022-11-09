import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetInsightSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors"
}
export declare class GetInsightSelectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInsightSelectorsXAmzTargetEnum;
}
export declare class GetInsightSelectorsRequest extends SpeakeasyBase {
    headers: GetInsightSelectorsHeaders;
    request: shared.GetInsightSelectorsRequest;
}
export declare class GetInsightSelectorsResponse extends SpeakeasyBase {
    contentType: string;
    getInsightSelectorsResponse?: shared.GetInsightSelectorsResponse;
    insightNotEnabledException?: any;
    invalidTrailNameException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    trailNotFoundException?: any;
    unsupportedOperationException?: any;
}
