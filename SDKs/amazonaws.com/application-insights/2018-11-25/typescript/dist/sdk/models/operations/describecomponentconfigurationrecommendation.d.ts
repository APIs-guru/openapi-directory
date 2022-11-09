import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeComponentConfigurationRecommendationXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeComponentConfigurationRecommendation = "EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation"
}
export declare class DescribeComponentConfigurationRecommendationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeComponentConfigurationRecommendationXAmzTargetEnum;
}
export declare class DescribeComponentConfigurationRecommendationRequest extends SpeakeasyBase {
    headers: DescribeComponentConfigurationRecommendationHeaders;
    request: shared.DescribeComponentConfigurationRecommendationRequest;
}
export declare class DescribeComponentConfigurationRecommendationResponse extends SpeakeasyBase {
    contentType: string;
    describeComponentConfigurationRecommendationResponse?: shared.DescribeComponentConfigurationRecommendationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
