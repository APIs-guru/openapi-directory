import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Amplitude" })
  amplitude?: AmplitudeConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Datadog" })
  datadog?: DatadogConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Dynatrace" })
  dynatrace?: DynatraceConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Honeycode" })
  honeycode?: HoneycodeConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=InforNexus" })
  inforNexus?: InforNexusConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Marketo" })
  marketo?: MarketoConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Redshift" })
  redshift?: RedshiftConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=SAPOData" })
  sapoData?: SapoDataConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Singular" })
  singular?: SingularConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Slack" })
  slack?: SlackConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Snowflake" })
  snowflake?: SnowflakeConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Trendmicro" })
  trendmicro?: TrendmicroConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Veeva" })
  veeva?: VeevaConnectorProfileCredentials;

  @SpeakeasyMetadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskConnectorProfileCredentials;
}
