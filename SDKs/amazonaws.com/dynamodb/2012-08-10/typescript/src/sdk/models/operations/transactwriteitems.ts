import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum TransactWriteItemsXAmzTargetEnum {
    DynamoDb20120810TransactWriteItems = "DynamoDB_20120810.TransactWriteItems"
}


export class TransactWriteItemsHeaders extends SpeakeasyBase {
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
  xAmzTarget: TransactWriteItemsXAmzTargetEnum;
}


export class TransactWriteItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TransactWriteItemsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TransactWriteItemsInput;
}


export class TransactWriteItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  provisionedThroughputExceededException?: any;

  @SpeakeasyMetadata()
  requestLimitExceeded?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactWriteItemsOutput?: shared.TransactWriteItemsOutput;

  @SpeakeasyMetadata()
  transactionCanceledException?: any;

  @SpeakeasyMetadata()
  transactionInProgressException?: any;
}
