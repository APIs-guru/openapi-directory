import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchGetItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=RequestItems" })
  requestItems?: string;
}

export enum BatchGetItemXAmzTargetEnum {
    DynamoDb20111205BatchGetItem = "DynamoDB_20111205.BatchGetItem"
}


export class BatchGetItemHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetItemXAmzTargetEnum;
}


export class BatchGetItemRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BatchGetItemQueryParams;

  @Metadata()
  headers: BatchGetItemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetItemInput;
}


export class BatchGetItemResponse extends SpeakeasyBase {
  @Metadata()
  batchGetItemOutput?: shared.BatchGetItemOutput;

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
}
