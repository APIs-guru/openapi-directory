import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartDetectorModelAnalysisHeaders extends SpeakeasyBase {
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


// StartDetectorModelAnalysisRequestBodyDetectorModelDefinition
/** 
 * Information that defines how a detector operates.
**/
export class StartDetectorModelAnalysisRequestBodyDetectorModelDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=initialStateName" })
  initialStateName?: string;

  @Metadata({ data: "json, name=states", elemType: shared.State })
  states?: shared.State[];
}


export class StartDetectorModelAnalysisRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModelDefinition" })
  detectorModelDefinition: StartDetectorModelAnalysisRequestBodyDetectorModelDefinition;
}


export class StartDetectorModelAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartDetectorModelAnalysisHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartDetectorModelAnalysisRequestBody;
}


export class StartDetectorModelAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  startDetectorModelAnalysisResponse?: shared.StartDetectorModelAnalysisResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
