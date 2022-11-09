import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatadogConnectorProfileProperties } from "./datadogconnectorprofileproperties";
import { DynatraceConnectorProfileProperties } from "./dynatraceconnectorprofileproperties";
import { InforNexusConnectorProfileProperties } from "./infornexusconnectorprofileproperties";
import { MarketoConnectorProfileProperties } from "./marketoconnectorprofileproperties";
import { RedshiftConnectorProfileProperties } from "./redshiftconnectorprofileproperties";
import { SapoDataConnectorProfileProperties } from "./sapodataconnectorprofileproperties";
import { SalesforceConnectorProfileProperties } from "./salesforceconnectorprofileproperties";
import { ServiceNowConnectorProfileProperties } from "./servicenowconnectorprofileproperties";
import { SlackConnectorProfileProperties } from "./slackconnectorprofileproperties";
import { SnowflakeConnectorProfileProperties } from "./snowflakeconnectorprofileproperties";
import { VeevaConnectorProfileProperties } from "./veevaconnectorprofileproperties";
import { ZendeskConnectorProfileProperties } from "./zendeskconnectorprofileproperties";


// ConnectorProfileProperties
/** 
 *  The connector-specific profile properties required by each connector. 
**/
export class ConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amplitude" })
  amplitude?: Map<string, any>;

  @Metadata({ data: "json, name=Datadog" })
  datadog?: DatadogConnectorProfileProperties;

  @Metadata({ data: "json, name=Dynatrace" })
  dynatrace?: DynatraceConnectorProfileProperties;

  @Metadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: Map<string, any>;

  @Metadata({ data: "json, name=Honeycode" })
  honeycode?: Map<string, any>;

  @Metadata({ data: "json, name=InforNexus" })
  inforNexus?: InforNexusConnectorProfileProperties;

  @Metadata({ data: "json, name=Marketo" })
  marketo?: MarketoConnectorProfileProperties;

  @Metadata({ data: "json, name=Redshift" })
  redshift?: RedshiftConnectorProfileProperties;

  @Metadata({ data: "json, name=SAPOData" })
  sapoData?: SapoDataConnectorProfileProperties;

  @Metadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceConnectorProfileProperties;

  @Metadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowConnectorProfileProperties;

  @Metadata({ data: "json, name=Singular" })
  singular?: Map<string, any>;

  @Metadata({ data: "json, name=Slack" })
  slack?: SlackConnectorProfileProperties;

  @Metadata({ data: "json, name=Snowflake" })
  snowflake?: SnowflakeConnectorProfileProperties;

  @Metadata({ data: "json, name=Trendmicro" })
  trendmicro?: Map<string, any>;

  @Metadata({ data: "json, name=Veeva" })
  veeva?: VeevaConnectorProfileProperties;

  @Metadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskConnectorProfileProperties;
}
