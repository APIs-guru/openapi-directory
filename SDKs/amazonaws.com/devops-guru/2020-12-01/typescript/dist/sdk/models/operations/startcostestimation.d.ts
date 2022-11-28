import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartCostEstimationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Information about a filter used to specify which AWS resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
**/
export declare class StartCostEstimationRequestBodyResourceCollection extends SpeakeasyBase {
    cloudFormation?: shared.CloudFormationCostEstimationResourceCollectionFilter;
}
export declare class StartCostEstimationRequestBody extends SpeakeasyBase {
    clientToken?: string;
    resourceCollection: StartCostEstimationRequestBodyResourceCollection;
}
export declare class StartCostEstimationRequest extends SpeakeasyBase {
    headers: StartCostEstimationHeaders;
    request: StartCostEstimationRequestBody;
}
export declare class StartCostEstimationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    startCostEstimationResponse?: Map<string, any>;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
