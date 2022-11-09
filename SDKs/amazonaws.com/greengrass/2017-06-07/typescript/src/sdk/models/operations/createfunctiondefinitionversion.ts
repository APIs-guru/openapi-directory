import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFunctionDefinitionVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" })
  functionDefinitionId: string;
}


export class CreateFunctionDefinitionVersionHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


// CreateFunctionDefinitionVersionRequestBodyDefaultConfig
/** 
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
**/
export class CreateFunctionDefinitionVersionRequestBodyDefaultConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Execution" })
  execution?: shared.FunctionDefaultExecutionConfig;
}


export class CreateFunctionDefinitionVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultConfig" })
  defaultConfig?: CreateFunctionDefinitionVersionRequestBodyDefaultConfig;

  @Metadata({ data: "json, name=Functions", elemType: shared.Function })
  functions?: shared.Function[];
}


export class CreateFunctionDefinitionVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateFunctionDefinitionVersionPathParams;

  @Metadata()
  headers: CreateFunctionDefinitionVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFunctionDefinitionVersionRequestBody;
}


export class CreateFunctionDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createFunctionDefinitionVersionResponse?: shared.CreateFunctionDefinitionVersionResponse;

  @Metadata()
  statusCode: number;
}
