import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchDetectKeyPhrasesXAmzTargetEnum {
    Comprehend20171127BatchDetectKeyPhrases = "Comprehend_20171127.BatchDetectKeyPhrases"
}


export class BatchDetectKeyPhrasesHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDetectKeyPhrasesXAmzTargetEnum;
}


export class BatchDetectKeyPhrasesRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDetectKeyPhrasesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchDetectKeyPhrasesRequest;
}


export class BatchDetectKeyPhrasesResponse extends SpeakeasyBase {
  @Metadata()
  batchDetectKeyPhrasesResponse?: shared.BatchDetectKeyPhrasesResponse;

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
