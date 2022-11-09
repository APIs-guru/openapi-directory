import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeConnectorProfilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeConnectorProfilesHeaders extends SpeakeasyBase {
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

export enum DescribeConnectorProfilesRequestBodyConnectorTypeEnum {
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


export class DescribeConnectorProfilesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileNames" })
  connectorProfileNames?: string[];

  @Metadata({ data: "json, name=connectorType" })
  connectorType?: DescribeConnectorProfilesRequestBodyConnectorTypeEnum;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class DescribeConnectorProfilesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeConnectorProfilesQueryParams;

  @Metadata()
  headers: DescribeConnectorProfilesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeConnectorProfilesRequestBody;
}


export class DescribeConnectorProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConnectorProfilesResponse?: shared.DescribeConnectorProfilesResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
