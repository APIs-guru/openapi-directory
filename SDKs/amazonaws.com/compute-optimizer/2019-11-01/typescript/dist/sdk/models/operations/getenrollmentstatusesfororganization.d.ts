import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEnrollmentStatusesForOrganizationXAmzTargetEnum {
    ComputeOptimizerServiceGetEnrollmentStatusesForOrganization = "ComputeOptimizerService.GetEnrollmentStatusesForOrganization"
}
export declare class GetEnrollmentStatusesForOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnrollmentStatusesForOrganizationXAmzTargetEnum;
}
export declare class GetEnrollmentStatusesForOrganizationRequest extends SpeakeasyBase {
    headers: GetEnrollmentStatusesForOrganizationHeaders;
    request: shared.GetEnrollmentStatusesForOrganizationRequest;
}
export declare class GetEnrollmentStatusesForOrganizationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEnrollmentStatusesForOrganizationResponse?: shared.GetEnrollmentStatusesForOrganizationResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    missingAuthenticationToken?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
