import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSecurityProfilePathParams extends SpeakeasyBase {
    securityProfileName: string;
}
export declare class CreateSecurityProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSecurityProfileRequestBody extends SpeakeasyBase {
    additionalMetricsToRetain?: string[];
    additionalMetricsToRetainV2?: shared.MetricToRetain[];
    alertTargets?: Map<string, shared.AlertTarget>;
    behaviors?: shared.Behavior[];
    securityProfileDescription?: string;
    tags?: shared.Tag[];
}
export declare class CreateSecurityProfileRequest extends SpeakeasyBase {
    pathParams: CreateSecurityProfilePathParams;
    headers: CreateSecurityProfileHeaders;
    request: CreateSecurityProfileRequestBody;
}
export declare class CreateSecurityProfileResponse extends SpeakeasyBase {
    contentType: string;
    createSecurityProfileResponse?: shared.CreateSecurityProfileResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
