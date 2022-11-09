import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetIdXAmzTargetEnum {
    AwsCognitoIdentityServiceGetId = "AWSCognitoIdentityService.GetId"
}
export declare class GetIdHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetIdXAmzTargetEnum;
}
export declare class GetIdRequest extends SpeakeasyBase {
    headers: GetIdHeaders;
    request: shared.GetIdInput;
}
export declare class GetIdResponse extends SpeakeasyBase {
    contentType: string;
    externalServiceException?: any;
    getIdResponse?: shared.GetIdResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
