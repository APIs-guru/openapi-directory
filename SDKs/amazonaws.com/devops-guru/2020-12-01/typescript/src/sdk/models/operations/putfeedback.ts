import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutFeedbackHeaders extends SpeakeasyBase {
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


// PutFeedbackRequestBodyInsightFeedback
/** 
 *  Information about insight feedback received from a customer. 
**/
export class PutFeedbackRequestBodyInsightFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Feedback" })
  feedback?: shared.InsightFeedbackOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}


export class PutFeedbackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightFeedback" })
  insightFeedback?: PutFeedbackRequestBodyInsightFeedback;
}


export class PutFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutFeedbackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutFeedbackRequestBody;
}


export class PutFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  putFeedbackResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
