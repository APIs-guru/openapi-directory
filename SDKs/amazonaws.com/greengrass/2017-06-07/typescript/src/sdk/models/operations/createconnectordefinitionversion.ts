import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateConnectorDefinitionVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConnectorDefinitionId" })
  connectorDefinitionId: string;
}


export class CreateConnectorDefinitionVersionHeaders extends SpeakeasyBase {
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


export class CreateConnectorDefinitionVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Connectors", elemType: shared.Connector })
  connectors?: shared.Connector[];
}


export class CreateConnectorDefinitionVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateConnectorDefinitionVersionPathParams;

  @Metadata()
  headers: CreateConnectorDefinitionVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateConnectorDefinitionVersionRequestBody;
}


export class CreateConnectorDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createConnectorDefinitionVersionResponse?: shared.CreateConnectorDefinitionVersionResponse;

  @Metadata()
  statusCode: number;
}
