import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLoggerDefinitionHeaders extends SpeakeasyBase {
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


// CreateLoggerDefinitionRequestBodyInitialVersion
/** 
 * Information about a logger definition version.
**/
export class CreateLoggerDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Loggers", elemType: shared.Logger })
  loggers?: shared.Logger[];
}


export class CreateLoggerDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateLoggerDefinitionRequestBodyInitialVersion;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateLoggerDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateLoggerDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateLoggerDefinitionRequestBody;
}


export class CreateLoggerDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createLoggerDefinitionResponse?: shared.CreateLoggerDefinitionResponse;

  @Metadata()
  statusCode: number;
}
