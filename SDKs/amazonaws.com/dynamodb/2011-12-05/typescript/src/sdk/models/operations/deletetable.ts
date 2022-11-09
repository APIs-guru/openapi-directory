import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteTableXAmzTargetEnum {
    DynamoDb20111205DeleteTable = "DynamoDB_20111205.DeleteTable"
}


export class DeleteTableHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteTableXAmzTargetEnum;
}


export class DeleteTableRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteTableHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteTableInput;
}


export class DeleteTableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteTableOutput?: shared.DeleteTableOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
