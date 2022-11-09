import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchDetectSentimentXAmzTargetEnum {
    Comprehend20171127BatchDetectSentiment = "Comprehend_20171127.BatchDetectSentiment"
}


export class BatchDetectSentimentHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: BatchDetectSentimentXAmzTargetEnum;
}


export class BatchDetectSentimentRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDetectSentimentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchDetectSentimentRequest;
}


export class BatchDetectSentimentResponse extends SpeakeasyBase {
  @Metadata()
  batchDetectSentimentResponse?: shared.BatchDetectSentimentResponse;

  @Metadata()
  batchSizeLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  textSizeLimitExceededException?: any;

  @Metadata()
  unsupportedLanguageException?: any;
}
