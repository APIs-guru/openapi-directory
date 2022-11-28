import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartDetectorModelAnalysisHeaders extends SpeakeasyBase {
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


// StartDetectorModelAnalysisRequestBodyDetectorModelDefinition
/** 
 * Information that defines how a detector operates.
**/
export class StartDetectorModelAnalysisRequestBodyDetectorModelDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialStateName" })
  initialStateName?: string;

  @SpeakeasyMetadata({ data: "json, name=states", elemType: shared.State })
  states?: shared.State[];
}


export class StartDetectorModelAnalysisRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModelDefinition" })
  detectorModelDefinition: StartDetectorModelAnalysisRequestBodyDetectorModelDefinition;
}


export class StartDetectorModelAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartDetectorModelAnalysisHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartDetectorModelAnalysisRequestBody;
}


export class StartDetectorModelAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  startDetectorModelAnalysisResponse?: shared.StartDetectorModelAnalysisResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
