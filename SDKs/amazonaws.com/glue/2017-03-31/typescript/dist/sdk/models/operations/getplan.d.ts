import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPlanXAmzTargetEnum {
    AwsGlueGetPlan = "AWSGlue.GetPlan"
}
export declare class GetPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPlanXAmzTargetEnum;
}
export declare class GetPlanRequest extends SpeakeasyBase {
    headers: GetPlanHeaders;
    request: shared.GetPlanRequest;
}
export declare class GetPlanResponse extends SpeakeasyBase {
    contentType: string;
    getPlanResponse?: shared.GetPlanResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
