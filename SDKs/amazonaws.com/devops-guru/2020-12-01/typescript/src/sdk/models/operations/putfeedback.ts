import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutFeedbackHeaders extends SpeakeasyBase {
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


// PutFeedbackRequestBodyInsightFeedback
/** 
 *  Information about insight feedback received from a customer. 
**/
export class PutFeedbackRequestBodyInsightFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=Feedback" })
  feedback?: shared.InsightFeedbackOptionEnum;

  @Metadata({ data: "json, name=Id" })
  id?: string;
}


export class PutFeedbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightFeedback" })
  insightFeedback?: PutFeedbackRequestBodyInsightFeedback;
}


export class PutFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutFeedbackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutFeedbackRequestBody;
}


export class PutFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  putFeedbackResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
