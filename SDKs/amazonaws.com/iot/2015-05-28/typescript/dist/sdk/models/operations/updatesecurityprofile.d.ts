import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSecurityProfilePathParams extends SpeakeasyBase {
    securityProfileName: string;
}
export declare class UpdateSecurityProfileQueryParams extends SpeakeasyBase {
    expectedVersion?: number;
}
export declare class UpdateSecurityProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSecurityProfileRequestBody extends SpeakeasyBase {
    additionalMetricsToRetain?: string[];
    additionalMetricsToRetainV2?: shared.MetricToRetain[];
    alertTargets?: Map<string, shared.AlertTarget>;
    behaviors?: shared.Behavior[];
    deleteAdditionalMetricsToRetain?: boolean;
    deleteAlertTargets?: boolean;
    deleteBehaviors?: boolean;
    securityProfileDescription?: string;
}
export declare class UpdateSecurityProfileRequest extends SpeakeasyBase {
    pathParams: UpdateSecurityProfilePathParams;
    queryParams: UpdateSecurityProfileQueryParams;
    headers: UpdateSecurityProfileHeaders;
    request: UpdateSecurityProfileRequestBody;
}
export declare class UpdateSecurityProfileResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateSecurityProfileResponse?: shared.UpdateSecurityProfileResponse;
    versionConflictException?: any;
}
