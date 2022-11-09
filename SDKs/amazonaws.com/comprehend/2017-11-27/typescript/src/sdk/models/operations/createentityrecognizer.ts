import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateEntityRecognizerXAmzTargetEnum {
    Comprehend20171127CreateEntityRecognizer = "Comprehend_20171127.CreateEntityRecognizer"
}


export class CreateEntityRecognizerHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateEntityRecognizerXAmzTargetEnum;
}


export class CreateEntityRecognizerRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEntityRecognizerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateEntityRecognizerRequest;
}


export class CreateEntityRecognizerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createEntityRecognizerResponse?: shared.CreateEntityRecognizerResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  kmsKeyValidationException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  tooManyTagsException?: any;

  @Metadata()
  unsupportedLanguageException?: any;
}
