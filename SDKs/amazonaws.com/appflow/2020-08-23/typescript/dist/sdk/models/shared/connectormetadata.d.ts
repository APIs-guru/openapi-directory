import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsMetadata } from "./googleanalyticsmetadata";
import { HoneycodeMetadata } from "./honeycodemetadata";
import { SalesforceMetadata } from "./salesforcemetadata";
import { SlackMetadata } from "./slackmetadata";
import { SnowflakeMetadata } from "./snowflakemetadata";
import { ZendeskMetadata } from "./zendeskmetadata";
/**
 *  A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on.
**/
export declare class ConnectorMetadata extends SpeakeasyBase {
    amplitude?: Map<string, any>;
    customerProfiles?: Map<string, any>;
    datadog?: Map<string, any>;
    dynatrace?: Map<string, any>;
    eventBridge?: Map<string, any>;
    googleAnalytics?: GoogleAnalyticsMetadata;
    honeycode?: HoneycodeMetadata;
    inforNexus?: Map<string, any>;
    marketo?: Map<string, any>;
    redshift?: Map<string, any>;
    s3?: Map<string, any>;
    sapoData?: Map<string, any>;
    salesforce?: SalesforceMetadata;
    serviceNow?: Map<string, any>;
    singular?: Map<string, any>;
    slack?: SlackMetadata;
    snowflake?: SnowflakeMetadata;
    trendmicro?: Map<string, any>;
    upsolver?: Map<string, any>;
    veeva?: Map<string, any>;
    zendesk?: ZendeskMetadata;
}
