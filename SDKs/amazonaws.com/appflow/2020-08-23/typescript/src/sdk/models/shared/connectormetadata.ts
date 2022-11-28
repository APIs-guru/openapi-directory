import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Amplitude" })
  amplitude?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CustomerProfiles" })
  customerProfiles?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Datadog" })
  datadog?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Dynatrace" })
  dynatrace?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=EventBridge" })
  eventBridge?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: GoogleAnalyticsMetadata;

  @SpeakeasyMetadata({ data: "json, name=Honeycode" })
  honeycode?: HoneycodeMetadata;

  @SpeakeasyMetadata({ data: "json, name=InforNexus" })
  inforNexus?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Marketo" })
  marketo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Redshift" })
  redshift?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=S3" })
  s3?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SAPOData" })
  sapoData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceMetadata;

  @SpeakeasyMetadata({ data: "json, name=ServiceNow" })
  serviceNow?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Singular" })
  singular?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Slack" })
  slack?: SlackMetadata;

  @SpeakeasyMetadata({ data: "json, name=Snowflake" })
  snowflake?: SnowflakeMetadata;

  @SpeakeasyMetadata({ data: "json, name=Trendmicro" })
  trendmicro?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Upsolver" })
  upsolver?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Veeva" })
  veeva?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskMetadata;
}
