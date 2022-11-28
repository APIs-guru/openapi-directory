import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 *  The connector-specific credentials required by a connector.
**/
export declare class ConnectorProfileCredentials extends SpeakeasyBase {
    amplitude?: AmplitudeConnectorProfileCredentials;
    datadog?: DatadogConnectorProfileCredentials;
    dynatrace?: DynatraceConnectorProfileCredentials;
    googleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;
    honeycode?: HoneycodeConnectorProfileCredentials;
    inforNexus?: InforNexusConnectorProfileCredentials;
    marketo?: MarketoConnectorProfileCredentials;
    redshift?: RedshiftConnectorProfileCredentials;
    sapoData?: SapoDataConnectorProfileCredentials;
    salesforce?: SalesforceConnectorProfileCredentials;
    serviceNow?: ServiceNowConnectorProfileCredentials;
    singular?: SingularConnectorProfileCredentials;
    slack?: SlackConnectorProfileCredentials;
    snowflake?: SnowflakeConnectorProfileCredentials;
    trendmicro?: TrendmicroConnectorProfileCredentials;
    veeva?: VeevaConnectorProfileCredentials;
    zendesk?: ZendeskConnectorProfileCredentials;
}
