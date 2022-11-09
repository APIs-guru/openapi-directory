import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateConnectorProfileHeaders extends SpeakeasyBase {
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

export enum CreateConnectorProfileRequestBodyConnectionModeEnum {
    Public = "Public"
,    Private = "Private"
}


// CreateConnectorProfileRequestBodyConnectorProfileConfig
/** 
 *  Defines the connector-specific configuration and credentials for the connector profile. 
**/
export class CreateConnectorProfileRequestBodyConnectorProfileConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileCredentials" })
  connectorProfileCredentials?: shared.ConnectorProfileCredentials;

  @Metadata({ data: "json, name=connectorProfileProperties" })
  connectorProfileProperties?: shared.ConnectorProfileProperties;
}

export enum CreateConnectorProfileRequestBodyConnectorTypeEnum {
    Salesforce = "Salesforce"
,    Singular = "Singular"
,    Slack = "Slack"
,    Redshift = "Redshift"
,    S3 = "S3"
,    Marketo = "Marketo"
,    Googleanalytics = "Googleanalytics"
,    Zendesk = "Zendesk"
,    Servicenow = "Servicenow"
,    Datadog = "Datadog"
,    Trendmicro = "Trendmicro"
,    Snowflake = "Snowflake"
,    Dynatrace = "Dynatrace"
,    Infornexus = "Infornexus"
,    Amplitude = "Amplitude"
,    Veeva = "Veeva"
,    EventBridge = "EventBridge"
,    LookoutMetrics = "LookoutMetrics"
,    Upsolver = "Upsolver"
,    Honeycode = "Honeycode"
,    CustomerProfiles = "CustomerProfiles"
,    SapoData = "SAPOData"
}


export class CreateConnectorProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionMode" })
  connectionMode: CreateConnectorProfileRequestBodyConnectionModeEnum;

  @Metadata({ data: "json, name=connectorProfileConfig" })
  connectorProfileConfig: CreateConnectorProfileRequestBodyConnectorProfileConfig;

  @Metadata({ data: "json, name=connectorProfileName" })
  connectorProfileName: string;

  @Metadata({ data: "json, name=connectorType" })
  connectorType: CreateConnectorProfileRequestBodyConnectorTypeEnum;

  @Metadata({ data: "json, name=kmsArn" })
  kmsArn?: string;
}


export class CreateConnectorProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateConnectorProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateConnectorProfileRequestBody;
}


export class CreateConnectorProfileResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  connectorAuthenticationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createConnectorProfileResponse?: shared.CreateConnectorProfileResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
