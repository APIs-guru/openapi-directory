import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateFunctionDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionDefinitionId" })
  functionDefinitionId: string;
}


export class UpdateFunctionDefinitionHeaders extends SpeakeasyBase {
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


export class UpdateFunctionDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


export class UpdateFunctionDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFunctionDefinitionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateFunctionDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateFunctionDefinitionRequestBody;
}


export class UpdateFunctionDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateFunctionDefinitionResponse?: Map<string, any>;
}
