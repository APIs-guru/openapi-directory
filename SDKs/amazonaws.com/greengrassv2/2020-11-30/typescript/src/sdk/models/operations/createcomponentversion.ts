import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateComponentVersionHeaders extends SpeakeasyBase {
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


// CreateComponentVersionRequestBodyLambdaFunction
/** 
 * Contains information about an Lambda function to import to create a component.
**/
export class CreateComponentVersionRequestBodyLambdaFunction extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentDependencies", elemType: shared.ComponentDependencyRequirement })
  componentDependencies?: Map<string, shared.ComponentDependencyRequirement>;

  @Metadata({ data: "json, name=componentLambdaParameters" })
  componentLambdaParameters?: shared.LambdaExecutionParameters;

  @Metadata({ data: "json, name=componentName" })
  componentName?: string;

  @Metadata({ data: "json, name=componentPlatforms", elemType: shared.ComponentPlatform })
  componentPlatforms?: shared.ComponentPlatform[];

  @Metadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @Metadata({ data: "json, name=lambdaArn" })
  lambdaArn?: string;
}


export class CreateComponentVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=inlineRecipe" })
  inlineRecipe?: string;

  @Metadata({ data: "json, name=lambdaFunction" })
  lambdaFunction?: CreateComponentVersionRequestBodyLambdaFunction;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateComponentVersionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateComponentVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateComponentVersionRequestBody;
}


export class CreateComponentVersionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createComponentVersionResponse?: shared.CreateComponentVersionResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  requestAlreadyInProgressException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
