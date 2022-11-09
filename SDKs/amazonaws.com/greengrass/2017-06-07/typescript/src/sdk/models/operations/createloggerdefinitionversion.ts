import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLoggerDefinitionVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LoggerDefinitionId" })
  loggerDefinitionId: string;
}


export class CreateLoggerDefinitionVersionHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


export class CreateLoggerDefinitionVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Loggers", elemType: shared.Logger })
  loggers?: shared.Logger[];
}


export class CreateLoggerDefinitionVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateLoggerDefinitionVersionPathParams;

  @Metadata()
  headers: CreateLoggerDefinitionVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateLoggerDefinitionVersionRequestBody;
}


export class CreateLoggerDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createLoggerDefinitionVersionResponse?: shared.CreateLoggerDefinitionVersionResponse;

  @Metadata()
  statusCode: number;
}
