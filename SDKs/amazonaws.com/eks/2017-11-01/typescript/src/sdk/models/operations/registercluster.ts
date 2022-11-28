import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegisterClusterHeaders extends SpeakeasyBase {
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


// RegisterClusterRequestBodyConnectorConfig
/** 
 * The configuration sent to a cluster for configuration.
**/
export class RegisterClusterRequestBodyConnectorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: shared.ConnectorConfigProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class RegisterClusterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorConfig" })
  connectorConfig: RegisterClusterRequestBodyConnectorConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class RegisterClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RegisterClusterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RegisterClusterRequestBody;
}


export class RegisterClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  registerClusterResponse?: shared.RegisterClusterResponse;

  @SpeakeasyMetadata()
  resourceLimitExceededException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
