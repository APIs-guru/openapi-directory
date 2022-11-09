import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetWorkflowsXAmzTargetEnum {
    AwsGlueBatchGetWorkflows = "AWSGlue.BatchGetWorkflows"
}


export class BatchGetWorkflowsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetWorkflowsXAmzTargetEnum;
}


export class BatchGetWorkflowsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetWorkflowsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetWorkflowsRequest;
}


export class BatchGetWorkflowsResponse extends SpeakeasyBase {
  @Metadata()
  batchGetWorkflowsResponse?: shared.BatchGetWorkflowsResponse;

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
