import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartDocumentClassificationJobXAmzTargetEnum {
    Comprehend20171127StartDocumentClassificationJob = "Comprehend_20171127.StartDocumentClassificationJob"
}


export class StartDocumentClassificationJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartDocumentClassificationJobXAmzTargetEnum;
}


export class StartDocumentClassificationJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartDocumentClassificationJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartDocumentClassificationJobRequest;
}


export class StartDocumentClassificationJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  kmsKeyValidationException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  startDocumentClassificationJobResponse?: shared.StartDocumentClassificationJobResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  tooManyTagsException?: any;
}
