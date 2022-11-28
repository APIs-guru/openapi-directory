import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEnvironmentXAmzTargetEnum {
    AwsCloud9WorkspaceManagementServiceDeleteEnvironment = "AWSCloud9WorkspaceManagementService.DeleteEnvironment"
}
export declare class DeleteEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEnvironmentXAmzTargetEnum;
}
export declare class DeleteEnvironmentRequest extends SpeakeasyBase {
    headers: DeleteEnvironmentHeaders;
    request: shared.DeleteEnvironmentRequest;
}
export declare class DeleteEnvironmentResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    deleteEnvironmentResult?: Map<string, any>;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
