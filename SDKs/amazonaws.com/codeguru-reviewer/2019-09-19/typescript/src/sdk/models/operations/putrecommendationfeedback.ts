import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRecommendationFeedbackHeaders extends SpeakeasyBase {
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


export class PutRecommendationFeedbackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeReviewArn" })
  codeReviewArn: string;

  @SpeakeasyMetadata({ data: "json, name=Reactions" })
  reactions: shared.ReactionEnum[];

  @SpeakeasyMetadata({ data: "json, name=RecommendationId" })
  recommendationId: string;
}


export class PutRecommendationFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutRecommendationFeedbackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutRecommendationFeedbackRequestBody;
}


export class PutRecommendationFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  putRecommendationFeedbackResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
