import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateConnectorProfileHeaders extends SpeakeasyBase {
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
}

export enum UpdateConnectorProfileRequestBodyConnectionModeEnum {
    Public = "Public"
,    Private = "Private"
}


// UpdateConnectorProfileRequestBodyConnectorProfileConfig
/** 
 *  Defines the connector-specific configuration and credentials for the connector profile. 
**/
export class UpdateConnectorProfileRequestBodyConnectorProfileConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileCredentials" })
  connectorProfileCredentials?: shared.ConnectorProfileCredentials;

  @Metadata({ data: "json, name=connectorProfileProperties" })
  connectorProfileProperties?: shared.ConnectorProfileProperties;
}


export class UpdateConnectorProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionMode" })
  connectionMode: UpdateConnectorProfileRequestBodyConnectionModeEnum;

  @Metadata({ data: "json, name=connectorProfileConfig" })
  connectorProfileConfig: UpdateConnectorProfileRequestBodyConnectorProfileConfig;

  @Metadata({ data: "json, name=connectorProfileName" })
  connectorProfileName: string;
}


export class UpdateConnectorProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateConnectorProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateConnectorProfileRequestBody;
}


export class UpdateConnectorProfileResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  connectorAuthenticationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateConnectorProfileResponse?: shared.UpdateConnectorProfileResponse;

  @Metadata()
  validationException?: any;
}
