import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateConnectorDefinitionHeaders extends SpeakeasyBase {
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


// CreateConnectorDefinitionRequestBodyInitialVersion
/** 
 * Information about the connector definition version, which is a container for connectors.
**/
export class CreateConnectorDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Connectors", elemType: shared.Connector })
  connectors?: shared.Connector[];
}


export class CreateConnectorDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateConnectorDefinitionRequestBodyInitialVersion;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateConnectorDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateConnectorDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateConnectorDefinitionRequestBody;
}


export class CreateConnectorDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createConnectorDefinitionResponse?: shared.CreateConnectorDefinitionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
