import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFlowHeaders extends SpeakeasyBase {
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
export declare class CreateFlowRequestBodySourceFlowConfig extends SpeakeasyBase {
    connectorProfileName?: string;
    connectorType?: shared.ConnectorTypeEnum;
    incrementalPullConfig?: shared.IncrementalPullConfig;
    sourceConnectorProperties?: shared.SourceConnectorProperties;
}
/**
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
**/
export declare class CreateFlowRequestBodyTriggerConfig extends SpeakeasyBase {
    triggerProperties?: shared.TriggerProperties;
    triggerType?: shared.TriggerTypeEnum;
}
export declare class CreateFlowRequestBody extends SpeakeasyBase {
    description?: string;
    destinationFlowConfigList: shared.DestinationFlowConfig[];
    flowName: string;
    kmsArn?: string;
    sourceFlowConfig: CreateFlowRequestBodySourceFlowConfig;
    tags?: Map<string, string>;
    tasks: shared.Task[];
    triggerConfig: CreateFlowRequestBodyTriggerConfig;
}
export declare class CreateFlowRequest extends SpeakeasyBase {
    headers: CreateFlowHeaders;
    request: CreateFlowRequestBody;
}
export declare class CreateFlowResponse extends SpeakeasyBase {
    conflictException?: any;
    connectorAuthenticationException?: any;
    connectorServerException?: any;
    contentType: string;
    createFlowResponse?: shared.CreateFlowResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
