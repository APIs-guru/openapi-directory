import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StopTrainingEntityRecognizerXAmzTargetEnum {
    Comprehend20171127StopTrainingEntityRecognizer = "Comprehend_20171127.StopTrainingEntityRecognizer"
}


export class StopTrainingEntityRecognizerHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopTrainingEntityRecognizerXAmzTargetEnum;
}


export class StopTrainingEntityRecognizerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StopTrainingEntityRecognizerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StopTrainingEntityRecognizerRequest;
}


export class StopTrainingEntityRecognizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopTrainingEntityRecognizerResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
