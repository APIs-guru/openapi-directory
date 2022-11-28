import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEnrollmentStatusXAmzTargetEnum {
    ComputeOptimizerServiceGetEnrollmentStatus = "ComputeOptimizerService.GetEnrollmentStatus"
}
export declare class GetEnrollmentStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnrollmentStatusXAmzTargetEnum;
}
export declare class GetEnrollmentStatusRequest extends SpeakeasyBase {
    headers: GetEnrollmentStatusHeaders;
    request: Map<string, any>;
}
export declare class GetEnrollmentStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEnrollmentStatusResponse?: shared.GetEnrollmentStatusResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    missingAuthenticationToken?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
