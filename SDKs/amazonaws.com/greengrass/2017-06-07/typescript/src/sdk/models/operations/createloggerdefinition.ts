import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLoggerDefinitionHeaders extends SpeakeasyBase {
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


// CreateLoggerDefinitionRequestBodyInitialVersion
/** 
 * Information about a logger definition version.
**/
export class CreateLoggerDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Loggers", elemType: shared.Logger })
  loggers?: shared.Logger[];
}


export class CreateLoggerDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateLoggerDefinitionRequestBodyInitialVersion;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateLoggerDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateLoggerDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateLoggerDefinitionRequestBody;
}


export class CreateLoggerDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createLoggerDefinitionResponse?: shared.CreateLoggerDefinitionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
