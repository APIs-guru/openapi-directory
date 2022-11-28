import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartUserImportJobXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceStartUserImportJob = "AWSCognitoIdentityProviderService.StartUserImportJob"
}
export declare class StartUserImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartUserImportJobXAmzTargetEnum;
}
export declare class StartUserImportJobRequest extends SpeakeasyBase {
    headers: StartUserImportJobHeaders;
    request: shared.StartUserImportJobRequest;
}
export declare class StartUserImportJobResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    preconditionNotMetException?: any;
    resourceNotFoundException?: any;
    startUserImportJobResponse?: shared.StartUserImportJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
