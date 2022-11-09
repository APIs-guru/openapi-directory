import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TransactGetItemsXAmzTargetEnum {
    DynamoDb20120810TransactGetItems = "DynamoDB_20120810.TransactGetItems"
}


export class TransactGetItemsHeaders extends SpeakeasyBase {
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
  xAmzTarget: TransactGetItemsXAmzTargetEnum;
}


export class TransactGetItemsRequest extends SpeakeasyBase {
  @Metadata()
  headers: TransactGetItemsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TransactGetItemsInput;
}


export class TransactGetItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

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
  transactGetItemsOutput?: shared.TransactGetItemsOutput;

  @Metadata()
  transactionCanceledException?: any;
}
