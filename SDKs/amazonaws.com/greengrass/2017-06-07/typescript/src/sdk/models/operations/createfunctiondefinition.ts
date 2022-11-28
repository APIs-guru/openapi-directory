import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFunctionDefinitionHeaders extends SpeakeasyBase {
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


// CreateFunctionDefinitionRequestBodyInitialVersion
/** 
 * Information about a function definition version.
**/
export class CreateFunctionDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultConfig" })
  defaultConfig?: shared.FunctionDefaultConfig;

  @SpeakeasyMetadata({ data: "json, name=Functions", elemType: shared.Function })
  functions?: shared.Function[];
}


export class CreateFunctionDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateFunctionDefinitionRequestBodyInitialVersion;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateFunctionDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFunctionDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateFunctionDefinitionRequestBody;
}


export class CreateFunctionDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createFunctionDefinitionResponse?: shared.CreateFunctionDefinitionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
