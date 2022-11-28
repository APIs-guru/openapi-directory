import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchGetQueryExecutionXAmzTargetEnum {
    AmazonAthenaBatchGetQueryExecution = "AmazonAthena.BatchGetQueryExecution"
}


export class BatchGetQueryExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetQueryExecutionXAmzTargetEnum;
}


export class BatchGetQueryExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetQueryExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetQueryExecutionInput;
}


export class BatchGetQueryExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetQueryExecutionOutput?: shared.BatchGetQueryExecutionOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
