import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TransactWriteItemsXAmzTargetEnum {
    DynamoDb20120810TransactWriteItems = "DynamoDB_20120810.TransactWriteItems"
}


export class TransactWriteItemsHeaders extends SpeakeasyBase {
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
  xAmzTarget: TransactWriteItemsXAmzTargetEnum;
}


export class TransactWriteItemsRequest extends SpeakeasyBase {
  @Metadata()
  headers: TransactWriteItemsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TransactWriteItemsInput;
}


export class TransactWriteItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

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
  transactWriteItemsOutput?: shared.TransactWriteItemsOutput;

  @Metadata()
  transactionCanceledException?: any;

  @Metadata()
  transactionInProgressException?: any;
}
