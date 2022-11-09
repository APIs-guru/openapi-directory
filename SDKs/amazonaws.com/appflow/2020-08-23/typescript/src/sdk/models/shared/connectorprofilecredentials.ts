import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AmplitudeConnectorProfileCredentials } from "./amplitudeconnectorprofilecredentials";
import { DatadogConnectorProfileCredentials } from "./datadogconnectorprofilecredentials";
import { DynatraceConnectorProfileCredentials } from "./dynatraceconnectorprofilecredentials";
import { GoogleAnalyticsConnectorProfileCredentials } from "./googleanalyticsconnectorprofilecredentials";
import { HoneycodeConnectorProfileCredentials } from "./honeycodeconnectorprofilecredentials";
import { InforNexusConnectorProfileCredentials } from "./infornexusconnectorprofilecredentials";
import { MarketoConnectorProfileCredentials } from "./marketoconnectorprofilecredentials";
import { RedshiftConnectorProfileCredentials } from "./redshiftconnectorprofilecredentials";
import { SapoDataConnectorProfileCredentials } from "./sapodataconnectorprofilecredentials";
import { SalesforceConnectorProfileCredentials } from "./salesforceconnectorprofilecredentials";
import { ServiceNowConnectorProfileCredentials } from "./servicenowconnectorprofilecredentials";
import { SingularConnectorProfileCredentials } from "./singularconnectorprofilecredentials";
import { SlackConnectorProfileCredentials } from "./slackconnectorprofilecredentials";
import { SnowflakeConnectorProfileCredentials } from "./snowflakeconnectorprofilecredentials";
import { TrendmicroConnectorProfileCredentials } from "./trendmicroconnectorprofilecredentials";
import { VeevaConnectorProfileCredentials } from "./veevaconnectorprofilecredentials";
import { ZendeskConnectorProfileCredentials } from "./zendeskconnectorprofilecredentials";


// ConnectorProfileCredentials
/** 
 *  The connector-specific credentials required by a connector. 
**/
export class ConnectorProfileCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amplitude" })
  amplitude?: AmplitudeConnectorProfileCredentials;

  @Metadata({ data: "json, name=Datadog" })
  datadog?: DatadogConnectorProfileCredentials;

  @Metadata({ data: "json, name=Dynatrace" })
  dynatrace?: DynatraceConnectorProfileCredentials;

  @Metadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;

  @Metadata({ data: "json, name=Honeycode" })
  honeycode?: HoneycodeConnectorProfileCredentials;

  @Metadata({ data: "json, name=InforNexus" })
  inforNexus?: InforNexusConnectorProfileCredentials;

  @Metadata({ data: "json, name=Marketo" })
  marketo?: MarketoConnectorProfileCredentials;

  @Metadata({ data: "json, name=Redshift" })
  redshift?: RedshiftConnectorProfileCredentials;

  @Metadata({ data: "json, name=SAPOData" })
  sapoData?: SapoDataConnectorProfileCredentials;

  @Metadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceConnectorProfileCredentials;

  @Metadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowConnectorProfileCredentials;

  @Metadata({ data: "json, name=Singular" })
  singular?: SingularConnectorProfileCredentials;

  @Metadata({ data: "json, name=Slack" })
  slack?: SlackConnectorProfileCredentials;

  @Metadata({ data: "json, name=Snowflake" })
  snowflake?: SnowflakeConnectorProfileCredentials;

  @Metadata({ data: "json, name=Trendmicro" })
  trendmicro?: TrendmicroConnectorProfileCredentials;

  @Metadata({ data: "json, name=Veeva" })
  veeva?: VeevaConnectorProfileCredentials;

  @Metadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskConnectorProfileCredentials;
}
