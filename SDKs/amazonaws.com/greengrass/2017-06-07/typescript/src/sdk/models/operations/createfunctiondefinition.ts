import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFunctionDefinitionHeaders extends SpeakeasyBase {
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


// CreateFunctionDefinitionRequestBodyInitialVersion
/** 
 * Information about a function definition version.
**/
export class CreateFunctionDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultConfig" })
  defaultConfig?: shared.FunctionDefaultConfig;

  @Metadata({ data: "json, name=Functions", elemType: shared.Function })
  functions?: shared.Function[];
}


export class CreateFunctionDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateFunctionDefinitionRequestBodyInitialVersion;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateFunctionDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFunctionDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFunctionDefinitionRequestBody;
}


export class CreateFunctionDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createFunctionDefinitionResponse?: shared.CreateFunctionDefinitionResponse;

  @Metadata()
  statusCode: number;
}
