import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopUserImportJobXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceStopUserImportJob = "AWSCognitoIdentityProviderService.StopUserImportJob"
}
export declare class StopUserImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopUserImportJobXAmzTargetEnum;
}
export declare class StopUserImportJobRequest extends SpeakeasyBase {
    headers: StopUserImportJobHeaders;
    request: shared.StopUserImportJobRequest;
}
export declare class StopUserImportJobResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    preconditionNotMetException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopUserImportJobResponse?: shared.StopUserImportJobResponse;
    tooManyRequestsException?: any;
}
