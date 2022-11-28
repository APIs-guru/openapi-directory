import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateInputHeaders extends SpeakeasyBase {
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


// CreateInputRequestBodyInputDefinition
/** 
 * The definition of the input.
**/
export class CreateInputRequestBodyInputDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: shared.Attribute[];
}


export class CreateInputRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputDefinition" })
  inputDefinition: CreateInputRequestBodyInputDefinition;

  @SpeakeasyMetadata({ data: "json, name=inputDescription" })
  inputDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=inputName" })
  inputName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateInputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateInputHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateInputRequestBody;
}


export class CreateInputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createInputResponse?: shared.CreateInputResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
