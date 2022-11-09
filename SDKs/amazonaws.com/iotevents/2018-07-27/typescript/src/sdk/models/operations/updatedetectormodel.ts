import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDetectorModelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=detectorModelName" })
  detectorModelName: string;
}


export class UpdateDetectorModelHeaders extends SpeakeasyBase {
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


// UpdateDetectorModelRequestBodyDetectorModelDefinition
/** 
 * Information that defines how a detector operates.
**/
export class UpdateDetectorModelRequestBodyDetectorModelDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=initialStateName" })
  initialStateName?: string;

  @Metadata({ data: "json, name=states", elemType: shared.State })
  states?: shared.State[];
}

export enum UpdateDetectorModelRequestBodyEvaluationMethodEnum {
    Batch = "BATCH"
,    Serial = "SERIAL"
}


export class UpdateDetectorModelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModelDefinition" })
  detectorModelDefinition: UpdateDetectorModelRequestBodyDetectorModelDefinition;

  @Metadata({ data: "json, name=detectorModelDescription" })
  detectorModelDescription?: string;

  @Metadata({ data: "json, name=evaluationMethod" })
  evaluationMethod?: UpdateDetectorModelRequestBodyEvaluationMethodEnum;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}


export class UpdateDetectorModelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDetectorModelPathParams;

  @Metadata()
  headers: UpdateDetectorModelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDetectorModelRequestBody;
}


export class UpdateDetectorModelResponse extends SpeakeasyBase {
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
  updateDetectorModelResponse?: shared.UpdateDetectorModelResponse;
}
