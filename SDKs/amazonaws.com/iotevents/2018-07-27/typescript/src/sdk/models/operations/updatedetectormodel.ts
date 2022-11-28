import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDetectorModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=detectorModelName" })
  detectorModelName: string;
}


export class UpdateDetectorModelHeaders extends SpeakeasyBase {
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


// UpdateDetectorModelRequestBodyDetectorModelDefinition
/** 
 * Information that defines how a detector operates.
**/
export class UpdateDetectorModelRequestBodyDetectorModelDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialStateName" })
  initialStateName?: string;

  @SpeakeasyMetadata({ data: "json, name=states", elemType: shared.State })
  states?: shared.State[];
}

export enum UpdateDetectorModelRequestBodyEvaluationMethodEnum {
    Batch = "BATCH",
    Serial = "SERIAL"
}


export class UpdateDetectorModelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModelDefinition" })
  detectorModelDefinition: UpdateDetectorModelRequestBodyDetectorModelDefinition;

  @SpeakeasyMetadata({ data: "json, name=detectorModelDescription" })
  detectorModelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationMethod" })
  evaluationMethod?: UpdateDetectorModelRequestBodyEvaluationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}


export class UpdateDetectorModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDetectorModelPathParams;

  @SpeakeasyMetadata()
  headers: UpdateDetectorModelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDetectorModelRequestBody;
}


export class UpdateDetectorModelResponse extends SpeakeasyBase {
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
  updateDetectorModelResponse?: shared.UpdateDetectorModelResponse;
}
