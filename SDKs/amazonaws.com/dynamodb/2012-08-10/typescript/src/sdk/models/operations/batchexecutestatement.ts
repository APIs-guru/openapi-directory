import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchExecuteStatementXAmzTargetEnum {
    DynamoDb20120810BatchExecuteStatement = "DynamoDB_20120810.BatchExecuteStatement"
}


export class BatchExecuteStatementHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchExecuteStatementXAmzTargetEnum;
}


export class BatchExecuteStatementRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchExecuteStatementHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchExecuteStatementInput;
}


export class BatchExecuteStatementResponse extends SpeakeasyBase {
  @Metadata()
  batchExecuteStatementOutput?: shared.BatchExecuteStatementOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  requestLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
