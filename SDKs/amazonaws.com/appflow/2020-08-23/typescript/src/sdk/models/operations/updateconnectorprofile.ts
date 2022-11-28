import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateConnectorProfileHeaders extends SpeakeasyBase {
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

export enum UpdateConnectorProfileRequestBodyConnectionModeEnum {
    Public = "Public",
    Private = "Private"
}


// UpdateConnectorProfileRequestBodyConnectorProfileConfig
/** 
 *  Defines the connector-specific configuration and credentials for the connector profile. 
**/
export class UpdateConnectorProfileRequestBodyConnectorProfileConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorProfileCredentials" })
  connectorProfileCredentials?: shared.ConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=connectorProfileProperties" })
  connectorProfileProperties?: shared.ConnectorProfileProperties;
}


export class UpdateConnectorProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionMode" })
  connectionMode: UpdateConnectorProfileRequestBodyConnectionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=connectorProfileConfig" })
  connectorProfileConfig: UpdateConnectorProfileRequestBodyConnectorProfileConfig;

  @SpeakeasyMetadata({ data: "json, name=connectorProfileName" })
  connectorProfileName: string;
}


export class UpdateConnectorProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateConnectorProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateConnectorProfileRequestBody;
}


export class UpdateConnectorProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  connectorAuthenticationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateConnectorProfileResponse?: shared.UpdateConnectorProfileResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
