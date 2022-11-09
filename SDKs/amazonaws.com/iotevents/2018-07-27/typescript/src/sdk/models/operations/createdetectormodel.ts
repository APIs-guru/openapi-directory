import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDetectorModelHeaders extends SpeakeasyBase {
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


// CreateDetectorModelRequestBodyDetectorModelDefinition
/** 
 * Information that defines how a detector operates.
**/
export class CreateDetectorModelRequestBodyDetectorModelDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=initialStateName" })
  initialStateName?: string;

  @Metadata({ data: "json, name=states", elemType: shared.State })
  states?: shared.State[];
}

export enum CreateDetectorModelRequestBodyEvaluationMethodEnum {
    Batch = "BATCH"
,    Serial = "SERIAL"
}


export class CreateDetectorModelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModelDefinition" })
  detectorModelDefinition: CreateDetectorModelRequestBodyDetectorModelDefinition;

  @Metadata({ data: "json, name=detectorModelDescription" })
  detectorModelDescription?: string;

  @Metadata({ data: "json, name=detectorModelName" })
  detectorModelName: string;

  @Metadata({ data: "json, name=evaluationMethod" })
  evaluationMethod?: CreateDetectorModelRequestBodyEvaluationMethodEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateDetectorModelRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDetectorModelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDetectorModelRequestBody;
}


export class CreateDetectorModelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDetectorModelResponse?: shared.CreateDetectorModelResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
