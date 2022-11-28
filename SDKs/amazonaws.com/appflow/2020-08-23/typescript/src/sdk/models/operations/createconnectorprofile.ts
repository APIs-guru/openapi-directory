import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateConnectorProfileHeaders extends SpeakeasyBase {
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

export enum CreateConnectorProfileRequestBodyConnectionModeEnum {
    Public = "Public",
    Private = "Private"
}


// CreateConnectorProfileRequestBodyConnectorProfileConfig
/** 
 *  Defines the connector-specific configuration and credentials for the connector profile. 
**/
export class CreateConnectorProfileRequestBodyConnectorProfileConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorProfileCredentials" })
  connectorProfileCredentials?: shared.ConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=connectorProfileProperties" })
  connectorProfileProperties?: shared.ConnectorProfileProperties;
}

export enum CreateConnectorProfileRequestBodyConnectorTypeEnum {
    Salesforce = "Salesforce",
    Singular = "Singular",
    Slack = "Slack",
    Redshift = "Redshift",
    S3 = "S3",
    Marketo = "Marketo",
    Googleanalytics = "Googleanalytics",
    Zendesk = "Zendesk",
    Servicenow = "Servicenow",
    Datadog = "Datadog",
    Trendmicro = "Trendmicro",
    Snowflake = "Snowflake",
    Dynatrace = "Dynatrace",
    Infornexus = "Infornexus",
    Amplitude = "Amplitude",
    Veeva = "Veeva",
    EventBridge = "EventBridge",
    LookoutMetrics = "LookoutMetrics",
    Upsolver = "Upsolver",
    Honeycode = "Honeycode",
    CustomerProfiles = "CustomerProfiles",
    SapoData = "SAPOData"
}


export class CreateConnectorProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionMode" })
  connectionMode: CreateConnectorProfileRequestBodyConnectionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=connectorProfileConfig" })
  connectorProfileConfig: CreateConnectorProfileRequestBodyConnectorProfileConfig;

  @SpeakeasyMetadata({ data: "json, name=connectorProfileName" })
  connectorProfileName: string;

  @SpeakeasyMetadata({ data: "json, name=connectorType" })
  connectorType: CreateConnectorProfileRequestBodyConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsArn" })
  kmsArn?: string;
}


export class CreateConnectorProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateConnectorProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateConnectorProfileRequestBody;
}


export class CreateConnectorProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  connectorAuthenticationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createConnectorProfileResponse?: shared.CreateConnectorProfileResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
