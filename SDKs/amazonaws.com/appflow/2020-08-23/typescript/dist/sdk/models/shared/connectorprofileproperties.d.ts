import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 *  The connector-specific profile properties required by each connector.
**/
export declare class ConnectorProfileProperties extends SpeakeasyBase {
    amplitude?: Map<string, any>;
    datadog?: DatadogConnectorProfileProperties;
    dynatrace?: DynatraceConnectorProfileProperties;
    googleAnalytics?: Map<string, any>;
    honeycode?: Map<string, any>;
    inforNexus?: InforNexusConnectorProfileProperties;
    marketo?: MarketoConnectorProfileProperties;
    redshift?: RedshiftConnectorProfileProperties;
    sapoData?: SapoDataConnectorProfileProperties;
    salesforce?: SalesforceConnectorProfileProperties;
    serviceNow?: ServiceNowConnectorProfileProperties;
    singular?: Map<string, any>;
    slack?: SlackConnectorProfileProperties;
    snowflake?: SnowflakeConnectorProfileProperties;
    trendmicro?: Map<string, any>;
    veeva?: VeevaConnectorProfileProperties;
    zendesk?: ZendeskConnectorProfileProperties;
}
