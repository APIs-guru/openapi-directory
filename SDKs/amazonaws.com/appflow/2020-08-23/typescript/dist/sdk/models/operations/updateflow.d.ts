import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFlowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  Contains information about the configuration of the source connector used in the flow.
**/
export declare class UpdateFlowRequestBodySourceFlowConfig extends SpeakeasyBase {
    connectorProfileName?: string;
    connectorType?: shared.ConnectorTypeEnum;
    incrementalPullConfig?: shared.IncrementalPullConfig;
    sourceConnectorProperties?: shared.SourceConnectorProperties;
}
/**
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
**/
export declare class UpdateFlowRequestBodyTriggerConfig extends SpeakeasyBase {
    triggerProperties?: shared.TriggerProperties;
    triggerType?: shared.TriggerTypeEnum;
}
export declare class UpdateFlowRequestBody extends SpeakeasyBase {
    description?: string;
    destinationFlowConfigList: shared.DestinationFlowConfig[];
    flowName: string;
    sourceFlowConfig: UpdateFlowRequestBodySourceFlowConfig;
    tasks: shared.Task[];
    triggerConfig: UpdateFlowRequestBodyTriggerConfig;
}
export declare class UpdateFlowRequest extends SpeakeasyBase {
    headers: UpdateFlowHeaders;
    request: UpdateFlowRequestBody;
}
export declare class UpdateFlowResponse extends SpeakeasyBase {
    conflictException?: any;
    connectorAuthenticationException?: any;
    connectorServerException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    updateFlowResponse?: shared.UpdateFlowResponse;
    validationException?: any;
}
