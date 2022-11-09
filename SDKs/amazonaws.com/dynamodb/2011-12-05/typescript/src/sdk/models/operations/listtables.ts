import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTablesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ExclusiveStartTableName" })
  exclusiveStartTableName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;
}

export enum ListTablesXAmzTargetEnum {
    DynamoDb20111205ListTables = "DynamoDB_20111205.ListTables"
}


export class ListTablesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTablesXAmzTargetEnum;
}


export class ListTablesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTablesQueryParams;

  @Metadata()
  headers: ListTablesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTablesInput;
}


export class ListTablesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  listTablesOutput?: shared.ListTablesOutput;

  @Metadata()
  statusCode: number;
}
