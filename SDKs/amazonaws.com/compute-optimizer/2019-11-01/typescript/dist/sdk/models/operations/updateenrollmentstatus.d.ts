import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateEnrollmentStatusXAmzTargetEnum {
    ComputeOptimizerServiceUpdateEnrollmentStatus = "ComputeOptimizerService.UpdateEnrollmentStatus"
}
export declare class UpdateEnrollmentStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnrollmentStatusXAmzTargetEnum;
}
export declare class UpdateEnrollmentStatusRequest extends SpeakeasyBase {
    headers: UpdateEnrollmentStatusHeaders;
    request: shared.UpdateEnrollmentStatusRequest;
}
export declare class UpdateEnrollmentStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    invalidParameterValueException?: any;
    missingAuthenticationToken?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    updateEnrollmentStatusResponse?: shared.UpdateEnrollmentStatusResponse;
}
