import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateFunctionDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" })
  functionDefinitionId: string;
}


export class UpdateFunctionDefinitionHeaders extends SpeakeasyBase {
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


export class UpdateFunctionDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}


export class UpdateFunctionDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFunctionDefinitionPathParams;

  @Metadata()
  headers: UpdateFunctionDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateFunctionDefinitionRequestBody;
}


export class UpdateFunctionDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateFunctionDefinitionResponse?: Map<string, any>;
}
