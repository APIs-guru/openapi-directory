import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartPolicyGenerationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains information about CloudTrail access.
**/
export declare class StartPolicyGenerationRequestBodyCloudTrailDetails extends SpeakeasyBase {
    accessRole?: string;
    endTime?: Date;
    startTime?: Date;
    trails?: shared.Trail[];
}
/**
 * Contains the ARN details about the IAM entity for which the policy is generated.
**/
export declare class StartPolicyGenerationRequestBodyPolicyGenerationDetails extends SpeakeasyBase {
    principalArn?: string;
}
export declare class StartPolicyGenerationRequestBody extends SpeakeasyBase {
    clientToken?: string;
    cloudTrailDetails?: StartPolicyGenerationRequestBodyCloudTrailDetails;
    policyGenerationDetails: StartPolicyGenerationRequestBodyPolicyGenerationDetails;
}
export declare class StartPolicyGenerationRequest extends SpeakeasyBase {
    headers: StartPolicyGenerationHeaders;
    request: StartPolicyGenerationRequestBody;
}
export declare class StartPolicyGenerationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    startPolicyGenerationResponse?: shared.StartPolicyGenerationResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
