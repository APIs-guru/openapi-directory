import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateInputPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inputName" })
  inputName: string;
}


export class UpdateInputHeaders extends SpeakeasyBase {
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


// UpdateInputRequestBodyInputDefinition
/** 
 * The definition of the input.
**/
export class UpdateInputRequestBodyInputDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: shared.Attribute[];
}


export class UpdateInputRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputDefinition" })
  inputDefinition: UpdateInputRequestBodyInputDefinition;

  @SpeakeasyMetadata({ data: "json, name=inputDescription" })
  inputDescription?: string;
}


export class UpdateInputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateInputPathParams;

  @SpeakeasyMetadata()
  headers: UpdateInputHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateInputRequestBody;
}


export class UpdateInputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateInputResponse?: shared.UpdateInputResponse;
}
