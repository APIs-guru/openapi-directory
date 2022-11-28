import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DetectKeyPhrasesXAmzTargetEnum {
    Comprehend20171127DetectKeyPhrases = "Comprehend_20171127.DetectKeyPhrases"
}


export class DetectKeyPhrasesHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DetectKeyPhrasesXAmzTargetEnum;
}


export class DetectKeyPhrasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DetectKeyPhrasesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DetectKeyPhrasesRequest;
}


export class DetectKeyPhrasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  detectKeyPhrasesResponse?: shared.DetectKeyPhrasesResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  textSizeLimitExceededException?: any;

  @SpeakeasyMetadata()
  unsupportedLanguageException?: any;
}
