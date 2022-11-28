import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MergeDeveloperIdentitiesXAmzTargetEnum {
    AwsCognitoIdentityServiceMergeDeveloperIdentities = "AWSCognitoIdentityService.MergeDeveloperIdentities"
}
export declare class MergeDeveloperIdentitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MergeDeveloperIdentitiesXAmzTargetEnum;
}
export declare class MergeDeveloperIdentitiesRequest extends SpeakeasyBase {
    headers: MergeDeveloperIdentitiesHeaders;
    request: shared.MergeDeveloperIdentitiesInput;
}
export declare class MergeDeveloperIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    mergeDeveloperIdentitiesResponse?: shared.MergeDeveloperIdentitiesResponse;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
