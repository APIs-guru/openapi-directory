import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateComponentVersionHeaders extends SpeakeasyBase {
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


// CreateComponentVersionRequestBodyLambdaFunction
/** 
 * Contains information about an Lambda function to import to create a component.
**/
export class CreateComponentVersionRequestBodyLambdaFunction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentDependencies", elemType: shared.ComponentDependencyRequirement })
  componentDependencies?: Map<string, shared.ComponentDependencyRequirement>;

  @SpeakeasyMetadata({ data: "json, name=componentLambdaParameters" })
  componentLambdaParameters?: shared.LambdaExecutionParameters;

  @SpeakeasyMetadata({ data: "json, name=componentName" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=componentPlatforms", elemType: shared.ComponentPlatform })
  componentPlatforms?: shared.ComponentPlatform[];

  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=lambdaArn" })
  lambdaArn?: string;
}


export class CreateComponentVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=inlineRecipe" })
  inlineRecipe?: string;

  @SpeakeasyMetadata({ data: "json, name=lambdaFunction" })
  lambdaFunction?: CreateComponentVersionRequestBodyLambdaFunction;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateComponentVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateComponentVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateComponentVersionRequestBody;
}


export class CreateComponentVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createComponentVersionResponse?: shared.CreateComponentVersionResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  requestAlreadyInProgressException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
