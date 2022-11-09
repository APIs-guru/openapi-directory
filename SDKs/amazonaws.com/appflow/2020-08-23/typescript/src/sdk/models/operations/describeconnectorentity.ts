import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeConnectorEntityHeaders extends SpeakeasyBase {
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

export enum DescribeConnectorEntityRequestBodyConnectorTypeEnum {
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


export class DescribeConnectorEntityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorEntityName" })
  connectorEntityName: string;

  @Metadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @Metadata({ data: "json, name=connectorType" })
  connectorType?: DescribeConnectorEntityRequestBodyConnectorTypeEnum;
}


export class DescribeConnectorEntityRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeConnectorEntityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeConnectorEntityRequestBody;
}


export class DescribeConnectorEntityResponse extends SpeakeasyBase {
  @Metadata()
  connectorAuthenticationException?: any;

  @Metadata()
  connectorServerException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeConnectorEntityResponse?: shared.DescribeConnectorEntityResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
