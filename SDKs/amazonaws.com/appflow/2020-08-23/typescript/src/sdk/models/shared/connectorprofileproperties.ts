import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Amplitude" })
  amplitude?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Datadog" })
  datadog?: DatadogConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=Dynatrace" })
  dynatrace?: DynatraceConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Honeycode" })
  honeycode?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=InforNexus" })
  inforNexus?: InforNexusConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=Marketo" })
  marketo?: MarketoConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=Redshift" })
  redshift?: RedshiftConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=SAPOData" })
  sapoData?: SapoDataConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=Singular" })
  singular?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Slack" })
  slack?: SlackConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=Snowflake" })
  snowflake?: SnowflakeConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=Trendmicro" })
  trendmicro?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Veeva" })
  veeva?: VeevaConnectorProfileProperties;

  @SpeakeasyMetadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskConnectorProfileProperties;
}
