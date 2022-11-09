import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopTrainingDocumentClassifierXAmzTargetEnum {
    Comprehend20171127StopTrainingDocumentClassifier = "Comprehend_20171127.StopTrainingDocumentClassifier"
}


export class StopTrainingDocumentClassifierHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopTrainingDocumentClassifierXAmzTargetEnum;
}


export class StopTrainingDocumentClassifierRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopTrainingDocumentClassifierHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopTrainingDocumentClassifierRequest;
}


export class StopTrainingDocumentClassifierResponse extends SpeakeasyBase {
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
  stopTrainingDocumentClassifierResponse?: Map<string, any>;

  @Metadata()
  tooManyRequestsException?: any;
}
