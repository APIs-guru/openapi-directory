import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateConnectorDefinitionHeaders extends SpeakeasyBase {
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


// CreateConnectorDefinitionRequestBodyInitialVersion
/** 
 * Information about the connector definition version, which is a container for connectors.
**/
export class CreateConnectorDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Connectors", elemType: shared.Connector })
  connectors?: shared.Connector[];
}


export class CreateConnectorDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateConnectorDefinitionRequestBodyInitialVersion;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateConnectorDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateConnectorDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateConnectorDefinitionRequestBody;
}


export class CreateConnectorDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createConnectorDefinitionResponse?: shared.CreateConnectorDefinitionResponse;

  @Metadata()
  statusCode: number;
}
