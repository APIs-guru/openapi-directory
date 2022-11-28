import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFlowHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateFlowRequestBodySourceFlowConfig
/** 
 *  Contains information about the configuration of the source connector used in the flow. 
**/
export class UpdateFlowRequestBodySourceFlowConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorType" })
  connectorType?: shared.ConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=incrementalPullConfig" })
  incrementalPullConfig?: shared.IncrementalPullConfig;

  @SpeakeasyMetadata({ data: "json, name=sourceConnectorProperties" })
  sourceConnectorProperties?: shared.SourceConnectorProperties;
}


// UpdateFlowRequestBodyTriggerConfig
/** 
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
**/
export class UpdateFlowRequestBodyTriggerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=triggerProperties" })
  triggerProperties?: shared.TriggerProperties;

  @SpeakeasyMetadata({ data: "json, name=triggerType" })
  triggerType?: shared.TriggerTypeEnum;
}


export class UpdateFlowRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationFlowConfigList", elemType: shared.DestinationFlowConfig })
  destinationFlowConfigList: shared.DestinationFlowConfig[];

  @SpeakeasyMetadata({ data: "json, name=flowName" })
  flowName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceFlowConfig" })
  sourceFlowConfig: UpdateFlowRequestBodySourceFlowConfig;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks: shared.Task[];

  @SpeakeasyMetadata({ data: "json, name=triggerConfig" })
  triggerConfig: UpdateFlowRequestBodyTriggerConfig;
}


export class UpdateFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateFlowHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateFlowRequestBody;
}


export class UpdateFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  connectorAuthenticationException?: any;

  @SpeakeasyMetadata()
  connectorServerException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateFlowResponse?: shared.UpdateFlowResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
