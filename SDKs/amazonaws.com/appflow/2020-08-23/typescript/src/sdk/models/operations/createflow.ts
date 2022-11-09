import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFlowHeaders extends SpeakeasyBase {
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


// CreateFlowRequestBodySourceFlowConfig
/** 
 *  Contains information about the configuration of the source connector used in the flow. 
**/
export class CreateFlowRequestBodySourceFlowConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @Metadata({ data: "json, name=connectorType" })
  connectorType?: shared.ConnectorTypeEnum;

  @Metadata({ data: "json, name=incrementalPullConfig" })
  incrementalPullConfig?: shared.IncrementalPullConfig;

  @Metadata({ data: "json, name=sourceConnectorProperties" })
  sourceConnectorProperties?: shared.SourceConnectorProperties;
}


// CreateFlowRequestBodyTriggerConfig
/** 
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
**/
export class CreateFlowRequestBodyTriggerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=triggerProperties" })
  triggerProperties?: shared.TriggerProperties;

  @Metadata({ data: "json, name=triggerType" })
  triggerType?: shared.TriggerTypeEnum;
}


export class CreateFlowRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationFlowConfigList", elemType: shared.DestinationFlowConfig })
  destinationFlowConfigList: shared.DestinationFlowConfig[];

  @Metadata({ data: "json, name=flowName" })
  flowName: string;

  @Metadata({ data: "json, name=kmsArn" })
  kmsArn?: string;

  @Metadata({ data: "json, name=sourceFlowConfig" })
  sourceFlowConfig: CreateFlowRequestBodySourceFlowConfig;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks: shared.Task[];

  @Metadata({ data: "json, name=triggerConfig" })
  triggerConfig: CreateFlowRequestBodyTriggerConfig;
}


export class CreateFlowRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFlowHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFlowRequestBody;
}


export class CreateFlowResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  connectorAuthenticationException?: any;

  @Metadata()
  connectorServerException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createFlowResponse?: shared.CreateFlowResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
