import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsMetadata } from "./googleanalyticsmetadata";
import { HoneycodeMetadata } from "./honeycodemetadata";
import { SalesforceMetadata } from "./salesforcemetadata";
import { SlackMetadata } from "./slackmetadata";
import { SnowflakeMetadata } from "./snowflakemetadata";
import { ZendeskMetadata } from "./zendeskmetadata";


// ConnectorMetadata
/** 
 *  A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. 
**/
export class ConnectorMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amplitude" })
  amplitude?: Map<string, any>;

  @Metadata({ data: "json, name=CustomerProfiles" })
  customerProfiles?: Map<string, any>;

  @Metadata({ data: "json, name=Datadog" })
  datadog?: Map<string, any>;

  @Metadata({ data: "json, name=Dynatrace" })
  dynatrace?: Map<string, any>;

  @Metadata({ data: "json, name=EventBridge" })
  eventBridge?: Map<string, any>;

  @Metadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: GoogleAnalyticsMetadata;

  @Metadata({ data: "json, name=Honeycode" })
  honeycode?: HoneycodeMetadata;

  @Metadata({ data: "json, name=InforNexus" })
  inforNexus?: Map<string, any>;

  @Metadata({ data: "json, name=Marketo" })
  marketo?: Map<string, any>;

  @Metadata({ data: "json, name=Redshift" })
  redshift?: Map<string, any>;

  @Metadata({ data: "json, name=S3" })
  s3?: Map<string, any>;

  @Metadata({ data: "json, name=SAPOData" })
  sapoData?: Map<string, any>;

  @Metadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceMetadata;

  @Metadata({ data: "json, name=ServiceNow" })
  serviceNow?: Map<string, any>;

  @Metadata({ data: "json, name=Singular" })
  singular?: Map<string, any>;

  @Metadata({ data: "json, name=Slack" })
  slack?: SlackMetadata;

  @Metadata({ data: "json, name=Snowflake" })
  snowflake?: SnowflakeMetadata;

  @Metadata({ data: "json, name=Trendmicro" })
  trendmicro?: Map<string, any>;

  @Metadata({ data: "json, name=Upsolver" })
  upsolver?: Map<string, any>;

  @Metadata({ data: "json, name=Veeva" })
  veeva?: Map<string, any>;

  @Metadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskMetadata;
}
