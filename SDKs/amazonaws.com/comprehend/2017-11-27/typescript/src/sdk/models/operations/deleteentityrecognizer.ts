import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteEntityRecognizerXAmzTargetEnum {
    Comprehend20171127DeleteEntityRecognizer = "Comprehend_20171127.DeleteEntityRecognizer"
}


export class DeleteEntityRecognizerHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteEntityRecognizerXAmzTargetEnum;
}


export class DeleteEntityRecognizerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteEntityRecognizerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteEntityRecognizerRequest;
}


export class DeleteEntityRecognizerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteEntityRecognizerResponse?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
