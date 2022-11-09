import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRecommendationFeedbackHeaders extends SpeakeasyBase {
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


export class PutRecommendationFeedbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeReviewArn" })
  codeReviewArn: string;

  @Metadata({ data: "json, name=Reactions" })
  reactions: shared.ReactionEnum[];

  @Metadata({ data: "json, name=RecommendationId" })
  recommendationId: string;
}


export class PutRecommendationFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutRecommendationFeedbackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutRecommendationFeedbackRequestBody;
}


export class PutRecommendationFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  putRecommendationFeedbackResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
