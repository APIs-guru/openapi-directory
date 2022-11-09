import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateInputHeaders extends SpeakeasyBase {
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


// CreateInputRequestBodyInputDefinition
/** 
 * The definition of the input.
**/
export class CreateInputRequestBodyInputDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: shared.Attribute[];
}


export class CreateInputRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputDefinition" })
  inputDefinition: CreateInputRequestBodyInputDefinition;

  @Metadata({ data: "json, name=inputDescription" })
  inputDescription?: string;

  @Metadata({ data: "json, name=inputName" })
  inputName: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateInputRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateInputHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateInputRequestBody;
}


export class CreateInputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createInputResponse?: shared.CreateInputResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
