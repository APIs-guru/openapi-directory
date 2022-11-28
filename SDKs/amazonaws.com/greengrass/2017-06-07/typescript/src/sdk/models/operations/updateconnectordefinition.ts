import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateConnectorDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConnectorDefinitionId" })
  connectorDefinitionId: string;
}


export class UpdateConnectorDefinitionHeaders extends SpeakeasyBase {
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


export class UpdateConnectorDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


export class UpdateConnectorDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateConnectorDefinitionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateConnectorDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateConnectorDefinitionRequestBody;
}


export class UpdateConnectorDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateConnectorDefinitionResponse?: Map<string, any>;
}
