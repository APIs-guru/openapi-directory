import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartDeploymentXAmzTargetEnum {
    AppRunnerStartDeployment = "AppRunner.StartDeployment"
}
export declare class StartDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDeploymentXAmzTargetEnum;
}
export declare class StartDeploymentRequest extends SpeakeasyBase {
    headers: StartDeploymentHeaders;
    request: shared.StartDeploymentRequest;
}
export declare class StartDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    startDeploymentResponse?: shared.StartDeploymentResponse;
    statusCode: number;
}
