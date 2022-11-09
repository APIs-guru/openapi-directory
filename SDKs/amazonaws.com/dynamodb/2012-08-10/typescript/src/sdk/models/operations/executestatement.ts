import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExecuteStatementXAmzTargetEnum {
    DynamoDb20120810ExecuteStatement = "DynamoDB_20120810.ExecuteStatement"
}


export class ExecuteStatementHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExecuteStatementXAmzTargetEnum;
}


export class ExecuteStatementRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExecuteStatementHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExecuteStatementInput;
}


export class ExecuteStatementResponse extends SpeakeasyBase {
  @Metadata()
  conditionalCheckFailedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  duplicateItemException?: any;

  @Metadata()
  executeStatementOutput?: shared.ExecuteStatementOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  itemCollectionSizeLimitExceededException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  requestLimitExceeded?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionConflictException?: any;
}
