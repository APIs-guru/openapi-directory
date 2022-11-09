import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExecuteTransactionXAmzTargetEnum {
    DynamoDb20120810ExecuteTransaction = "DynamoDB_20120810.ExecuteTransaction"
}


export class ExecuteTransactionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExecuteTransactionXAmzTargetEnum;
}


export class ExecuteTransactionRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExecuteTransactionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExecuteTransactionInput;
}


export class ExecuteTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  executeTransactionOutput?: shared.ExecuteTransactionOutput;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  requestLimitExceeded?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionCanceledException?: any;

  @Metadata()
  transactionInProgressException?: any;
}
