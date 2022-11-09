import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetTriggersXAmzTargetEnum {
    AwsGlueBatchGetTriggers = "AWSGlue.BatchGetTriggers"
}


export class BatchGetTriggersHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetTriggersXAmzTargetEnum;
}


export class BatchGetTriggersRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetTriggersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetTriggersRequest;
}


export class BatchGetTriggersResponse extends SpeakeasyBase {
  @Metadata()
  batchGetTriggersResponse?: shared.BatchGetTriggersResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
