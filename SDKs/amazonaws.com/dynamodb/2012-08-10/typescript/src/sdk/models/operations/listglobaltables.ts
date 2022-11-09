import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListGlobalTablesXAmzTargetEnum {
    DynamoDb20120810ListGlobalTables = "DynamoDB_20120810.ListGlobalTables"
}


export class ListGlobalTablesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListGlobalTablesXAmzTargetEnum;
}


export class ListGlobalTablesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListGlobalTablesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListGlobalTablesInput;
}


export class ListGlobalTablesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  listGlobalTablesOutput?: shared.ListGlobalTablesOutput;

  @Metadata()
  statusCode: number;
}
