import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLoggerDefinitionVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LoggerDefinitionId" })
  loggerDefinitionId: string;
}


export class CreateLoggerDefinitionVersionHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


export class CreateLoggerDefinitionVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Loggers", elemType: shared.Logger })
  loggers?: shared.Logger[];
}


export class CreateLoggerDefinitionVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateLoggerDefinitionVersionPathParams;

  @SpeakeasyMetadata()
  headers: CreateLoggerDefinitionVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateLoggerDefinitionVersionRequestBody;
}


export class CreateLoggerDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createLoggerDefinitionVersionResponse?: shared.CreateLoggerDefinitionVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
