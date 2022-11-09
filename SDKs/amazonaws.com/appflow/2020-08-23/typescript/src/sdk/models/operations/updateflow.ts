import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFlowHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateFlowRequestBodySourceFlowConfig
/** 
 *  Contains information about the configuration of the source connector used in the flow. 
**/
export class UpdateFlowRequestBodySourceFlowConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @Metadata({ data: "json, name=connectorType" })
  connectorType?: shared.ConnectorTypeEnum;

  @Metadata({ data: "json, name=incrementalPullConfig" })
  incrementalPullConfig?: shared.IncrementalPullConfig;

  @Metadata({ data: "json, name=sourceConnectorProperties" })
  sourceConnectorProperties?: shared.SourceConnectorProperties;
}


// UpdateFlowRequestBodyTriggerConfig
/** 
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
**/
export class UpdateFlowRequestBodyTriggerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=triggerProperties" })
  triggerProperties?: shared.TriggerProperties;

  @Metadata({ data: "json, name=triggerType" })
  triggerType?: shared.TriggerTypeEnum;
}


export class UpdateFlowRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationFlowConfigList", elemType: shared.DestinationFlowConfig })
  destinationFlowConfigList: shared.DestinationFlowConfig[];

  @Metadata({ data: "json, name=flowName" })
  flowName: string;

  @Metadata({ data: "json, name=sourceFlowConfig" })
  sourceFlowConfig: UpdateFlowRequestBodySourceFlowConfig;

  @Metadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks: shared.Task[];

  @Metadata({ data: "json, name=triggerConfig" })
  triggerConfig: UpdateFlowRequestBodyTriggerConfig;
}


export class UpdateFlowRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateFlowHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateFlowRequestBody;
}


export class UpdateFlowResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  connectorAuthenticationException?: any;

  @Metadata()
  connectorServerException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateFlowResponse?: shared.UpdateFlowResponse;

  @Metadata()
  validationException?: any;
}
