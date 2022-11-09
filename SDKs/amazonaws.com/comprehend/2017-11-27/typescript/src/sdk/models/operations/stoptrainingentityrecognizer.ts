import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopTrainingEntityRecognizerXAmzTargetEnum {
    Comprehend20171127StopTrainingEntityRecognizer = "Comprehend_20171127.StopTrainingEntityRecognizer"
}


export class StopTrainingEntityRecognizerHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopTrainingEntityRecognizerXAmzTargetEnum;
}


export class StopTrainingEntityRecognizerRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopTrainingEntityRecognizerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopTrainingEntityRecognizerRequest;
}


export class StopTrainingEntityRecognizerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopTrainingEntityRecognizerResponse?: Map<string, any>;

  @Metadata()
  tooManyRequestsException?: any;
}
