import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDetectorModelHeaders extends SpeakeasyBase {
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


// CreateDetectorModelRequestBodyDetectorModelDefinition
/** 
 * Information that defines how a detector operates.
**/
export class CreateDetectorModelRequestBodyDetectorModelDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialStateName" })
  initialStateName?: string;

  @SpeakeasyMetadata({ data: "json, name=states", elemType: shared.State })
  states?: shared.State[];
}

export enum CreateDetectorModelRequestBodyEvaluationMethodEnum {
    Batch = "BATCH",
    Serial = "SERIAL"
}


export class CreateDetectorModelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModelDefinition" })
  detectorModelDefinition: CreateDetectorModelRequestBodyDetectorModelDefinition;

  @SpeakeasyMetadata({ data: "json, name=detectorModelDescription" })
  detectorModelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=detectorModelName" })
  detectorModelName: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationMethod" })
  evaluationMethod?: CreateDetectorModelRequestBodyEvaluationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateDetectorModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDetectorModelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDetectorModelRequestBody;
}


export class CreateDetectorModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDetectorModelResponse?: shared.CreateDetectorModelResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
