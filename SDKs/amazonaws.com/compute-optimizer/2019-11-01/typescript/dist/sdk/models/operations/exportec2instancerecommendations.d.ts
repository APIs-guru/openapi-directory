import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExportEc2InstanceRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportEc2InstanceRecommendations = "ComputeOptimizerService.ExportEC2InstanceRecommendations"
}
export declare class ExportEc2InstanceRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportEc2InstanceRecommendationsXAmzTargetEnum;
}
export declare class ExportEc2InstanceRecommendationsRequest extends SpeakeasyBase {
    headers: ExportEc2InstanceRecommendationsHeaders;
    request: shared.ExportEc2InstanceRecommendationsRequest;
}
export declare class ExportEc2InstanceRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    exportEc2InstanceRecommendationsResponse?: shared.ExportEc2InstanceRecommendationsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
