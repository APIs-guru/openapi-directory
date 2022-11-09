import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetScalingPlanResourceForecastDataXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData = "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData"
}
export declare class GetScalingPlanResourceForecastDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetScalingPlanResourceForecastDataXAmzTargetEnum;
}
export declare class GetScalingPlanResourceForecastDataRequest extends SpeakeasyBase {
    headers: GetScalingPlanResourceForecastDataHeaders;
    request: shared.GetScalingPlanResourceForecastDataRequest;
}
export declare class GetScalingPlanResourceForecastDataResponse extends SpeakeasyBase {
    contentType: string;
    getScalingPlanResourceForecastDataResponse?: shared.GetScalingPlanResourceForecastDataResponse;
    internalServiceException?: any;
    statusCode: number;
    validationException?: any;
}
