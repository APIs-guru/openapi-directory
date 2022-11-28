import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateEnvironmentXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceUpdateEnvironment = "AWSCloud9WorkspaceManagementService.UpdateEnvironment"
}
export declare class UpdateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentXAmzTargetEnum;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    headers: UpdateEnvironmentHeaders;
    request: shared.UpdateEnvironmentRequest;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateEnvironmentResult?: Map<string, any>;
}
