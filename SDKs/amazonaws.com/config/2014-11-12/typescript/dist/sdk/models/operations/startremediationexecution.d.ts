import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartRemediationExecutionXAmzTargetEnum {
    StarlingDoveServiceStartRemediationExecution = "StarlingDoveService.StartRemediationExecution"
}
export declare class StartRemediationExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartRemediationExecutionXAmzTargetEnum;
}
export declare class StartRemediationExecutionRequest extends SpeakeasyBase {
    headers: StartRemediationExecutionHeaders;
    request: shared.StartRemediationExecutionRequest;
}
export declare class StartRemediationExecutionResponse extends SpeakeasyBase {
    contentType: string;
    insufficientPermissionsException?: any;
    invalidParameterValueException?: any;
    noSuchRemediationConfigurationException?: any;
    startRemediationExecutionResponse?: shared.StartRemediationExecutionResponse;
    statusCode: number;
}
