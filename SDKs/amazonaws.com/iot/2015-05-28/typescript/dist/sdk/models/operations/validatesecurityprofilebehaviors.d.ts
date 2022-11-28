import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateSecurityProfileBehaviorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ValidateSecurityProfileBehaviorsRequestBody extends SpeakeasyBase {
    behaviors: shared.Behavior[];
}
export declare class ValidateSecurityProfileBehaviorsRequest extends SpeakeasyBase {
    headers: ValidateSecurityProfileBehaviorsHeaders;
    request: ValidateSecurityProfileBehaviorsRequestBody;
}
export declare class ValidateSecurityProfileBehaviorsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
    validateSecurityProfileBehaviorsResponse?: shared.ValidateSecurityProfileBehaviorsResponse;
}
