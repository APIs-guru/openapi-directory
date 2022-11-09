import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchCreateTableRowsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tableId" })
  tableId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" })
  workbookId: string;
}


export class BatchCreateTableRowsHeaders extends SpeakeasyBase {
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
}


export class BatchCreateTableRowsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=rowsToCreate", elemType: shared.CreateRowData })
  rowsToCreate: shared.CreateRowData[];
}


export class BatchCreateTableRowsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchCreateTableRowsPathParams;

  @Metadata()
  headers: BatchCreateTableRowsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchCreateTableRowsRequestBody;
}


export class BatchCreateTableRowsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  batchCreateTableRowsResult?: shared.BatchCreateTableRowsResult;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  requestTimeoutException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
