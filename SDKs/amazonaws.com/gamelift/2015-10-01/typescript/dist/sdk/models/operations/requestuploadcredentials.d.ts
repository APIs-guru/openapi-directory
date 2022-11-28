import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RequestUploadCredentialsXAmzTargetEnum {
    GameLiftRequestUploadCredentials = "GameLift.RequestUploadCredentials"
}
export declare class RequestUploadCredentialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RequestUploadCredentialsXAmzTargetEnum;
}
export declare class RequestUploadCredentialsRequest extends SpeakeasyBase {
    headers: RequestUploadCredentialsHeaders;
    request: shared.RequestUploadCredentialsInput;
}
export declare class RequestUploadCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    requestUploadCredentialsOutput?: shared.RequestUploadCredentialsOutput;
    statusCode: number;
    unauthorizedException?: any;
}
