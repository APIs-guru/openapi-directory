import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchDetectDominantLanguageXAmzTargetEnum {
    Comprehend20171127BatchDetectDominantLanguage = "Comprehend_20171127.BatchDetectDominantLanguage"
}


export class BatchDetectDominantLanguageHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDetectDominantLanguageXAmzTargetEnum;
}


export class BatchDetectDominantLanguageRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDetectDominantLanguageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchDetectDominantLanguageRequest;
}


export class BatchDetectDominantLanguageResponse extends SpeakeasyBase {
  @Metadata()
  batchDetectDominantLanguageResponse?: shared.BatchDetectDominantLanguageResponse;

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
}
