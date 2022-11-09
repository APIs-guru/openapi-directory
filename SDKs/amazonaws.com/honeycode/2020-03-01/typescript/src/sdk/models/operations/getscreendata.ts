import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScreenDataHeaders extends SpeakeasyBase {
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


export class GetScreenDataRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=screenId" })
  screenId: string;

  @Metadata({ data: "json, name=variables", elemType: shared.VariableValue })
  variables?: Map<string, shared.VariableValue>;

  @Metadata({ data: "json, name=workbookId" })
  workbookId: string;
}


export class GetScreenDataRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetScreenDataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetScreenDataRequestBody;
}


export class GetScreenDataResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getScreenDataResult?: shared.GetScreenDataResult;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  requestTimeoutException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
