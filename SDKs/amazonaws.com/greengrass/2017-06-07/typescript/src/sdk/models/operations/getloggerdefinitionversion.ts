import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLoggerDefinitionVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LoggerDefinitionId" })
  loggerDefinitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LoggerDefinitionVersionId" })
  loggerDefinitionVersionId: string;
}


export class GetLoggerDefinitionVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetLoggerDefinitionVersionHeaders extends SpeakeasyBase {
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


export class GetLoggerDefinitionVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLoggerDefinitionVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLoggerDefinitionVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetLoggerDefinitionVersionHeaders;
}


export class GetLoggerDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLoggerDefinitionVersionResponse?: shared.GetLoggerDefinitionVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
