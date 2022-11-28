import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScreenDataHeaders extends SpeakeasyBase {
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
}


export class GetScreenDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=screenId" })
  screenId: string;

  @SpeakeasyMetadata({ data: "json, name=variables", elemType: shared.VariableValue })
  variables?: Map<string, shared.VariableValue>;

  @SpeakeasyMetadata({ data: "json, name=workbookId" })
  workbookId: string;
}


export class GetScreenDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetScreenDataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetScreenDataRequestBody;
}


export class GetScreenDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getScreenDataResult?: shared.GetScreenDataResult;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  requestTimeoutException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
