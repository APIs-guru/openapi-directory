import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutIntegrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class PutIntegrationHeaders extends SpeakeasyBase {
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


// PutIntegrationRequestBodyFlowDefinition
/** 
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
**/
export class PutIntegrationRequestBodyFlowDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FlowName" })
  flowName?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsArn" })
  kmsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceFlowConfig" })
  sourceFlowConfig?: shared.SourceFlowConfig;

  @SpeakeasyMetadata({ data: "json, name=Tasks", elemType: shared.Task })
  tasks?: shared.Task[];

  @SpeakeasyMetadata({ data: "json, name=TriggerConfig" })
  triggerConfig?: shared.TriggerConfig;
}


export class PutIntegrationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FlowDefinition" })
  flowDefinition?: PutIntegrationRequestBodyFlowDefinition;

  @SpeakeasyMetadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Uri" })
  uri?: string;
}


export class PutIntegrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutIntegrationPathParams;

  @SpeakeasyMetadata()
  headers: PutIntegrationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutIntegrationRequestBody;
}


export class PutIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  putIntegrationResponse?: shared.PutIntegrationResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
