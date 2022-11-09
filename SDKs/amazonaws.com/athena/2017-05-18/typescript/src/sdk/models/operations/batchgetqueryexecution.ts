import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetQueryExecutionXAmzTargetEnum {
    AmazonAthenaBatchGetQueryExecution = "AmazonAthena.BatchGetQueryExecution"
}


export class BatchGetQueryExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetQueryExecutionXAmzTargetEnum;
}


export class BatchGetQueryExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetQueryExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetQueryExecutionInput;
}


export class BatchGetQueryExecutionResponse extends SpeakeasyBase {
  @Metadata()
  batchGetQueryExecutionOutput?: shared.BatchGetQueryExecutionOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
