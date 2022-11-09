import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterClusterHeaders extends SpeakeasyBase {
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


// RegisterClusterRequestBodyConnectorConfig
/** 
 * The configuration sent to a cluster for configuration.
**/
export class RegisterClusterRequestBodyConnectorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=provider" })
  provider?: shared.ConnectorConfigProviderEnum;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class RegisterClusterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=connectorConfig" })
  connectorConfig: RegisterClusterRequestBodyConnectorConfig;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class RegisterClusterRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterClusterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RegisterClusterRequestBody;
}


export class RegisterClusterResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  registerClusterResponse?: shared.RegisterClusterResponse;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
