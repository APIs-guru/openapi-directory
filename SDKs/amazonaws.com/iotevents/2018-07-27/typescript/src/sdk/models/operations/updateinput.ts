import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateInputPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inputName" })
  inputName: string;
}


export class UpdateInputHeaders extends SpeakeasyBase {
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


// UpdateInputRequestBodyInputDefinition
/** 
 * The definition of the input.
**/
export class UpdateInputRequestBodyInputDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: shared.Attribute[];
}


export class UpdateInputRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputDefinition" })
  inputDefinition: UpdateInputRequestBodyInputDefinition;

  @Metadata({ data: "json, name=inputDescription" })
  inputDescription?: string;
}


export class UpdateInputRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateInputPathParams;

  @Metadata()
  headers: UpdateInputHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateInputRequestBody;
}


export class UpdateInputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateInputResponse?: shared.UpdateInputResponse;
}
