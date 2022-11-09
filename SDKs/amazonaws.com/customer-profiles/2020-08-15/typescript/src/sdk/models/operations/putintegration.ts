import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutIntegrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class PutIntegrationHeaders extends SpeakeasyBase {
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


// PutIntegrationRequestBodyFlowDefinition
/** 
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
**/
export class PutIntegrationRequestBodyFlowDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FlowName" })
  flowName?: string;

  @Metadata({ data: "json, name=KmsArn" })
  kmsArn?: string;

  @Metadata({ data: "json, name=SourceFlowConfig" })
  sourceFlowConfig?: shared.SourceFlowConfig;

  @Metadata({ data: "json, name=Tasks", elemType: shared.Task })
  tasks?: shared.Task[];

  @Metadata({ data: "json, name=TriggerConfig" })
  triggerConfig?: shared.TriggerConfig;
}


export class PutIntegrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlowDefinition" })
  flowDefinition?: PutIntegrationRequestBodyFlowDefinition;

  @Metadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=Uri" })
  uri?: string;
}


export class PutIntegrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutIntegrationPathParams;

  @Metadata()
  headers: PutIntegrationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutIntegrationRequestBody;
}


export class PutIntegrationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  putIntegrationResponse?: shared.PutIntegrationResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
