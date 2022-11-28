import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFunctionDefinitionVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" })
  functionDefinitionId: string;
}


export class CreateFunctionDefinitionVersionHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


// CreateFunctionDefinitionVersionRequestBodyDefaultConfig
/** 
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
**/
export class CreateFunctionDefinitionVersionRequestBodyDefaultConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Execution" })
  execution?: shared.FunctionDefaultExecutionConfig;
}


export class CreateFunctionDefinitionVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultConfig" })
  defaultConfig?: CreateFunctionDefinitionVersionRequestBodyDefaultConfig;

  @SpeakeasyMetadata({ data: "json, name=Functions", elemType: shared.Function })
  functions?: shared.Function[];
}


export class CreateFunctionDefinitionVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateFunctionDefinitionVersionPathParams;

  @SpeakeasyMetadata()
  headers: CreateFunctionDefinitionVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateFunctionDefinitionVersionRequestBody;
}


export class CreateFunctionDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createFunctionDefinitionVersionResponse?: shared.CreateFunctionDefinitionVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
