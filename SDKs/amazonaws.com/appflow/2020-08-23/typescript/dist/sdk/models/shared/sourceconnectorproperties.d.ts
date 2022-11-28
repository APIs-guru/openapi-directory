import { SpeakeasyBase } from "../../../internal/utils";
import { AmplitudeSourceProperties } from "./amplitudesourceproperties";
import { DatadogSourceProperties } from "./datadogsourceproperties";
import { DynatraceSourceProperties } from "./dynatracesourceproperties";
import { GoogleAnalyticsSourceProperties } from "./googleanalyticssourceproperties";
import { InforNexusSourceProperties } from "./infornexussourceproperties";
import { MarketoSourceProperties } from "./marketosourceproperties";
import { S3SourceProperties } from "./s3sourceproperties";
import { SapoDataSourceProperties } from "./sapodatasourceproperties";
import { SalesforceSourceProperties } from "./salesforcesourceproperties";
import { ServiceNowSourceProperties } from "./servicenowsourceproperties";
import { SingularSourceProperties } from "./singularsourceproperties";
import { SlackSourceProperties } from "./slacksourceproperties";
import { TrendmicroSourceProperties } from "./trendmicrosourceproperties";
import { VeevaSourceProperties } from "./veevasourceproperties";
import { ZendeskSourceProperties } from "./zendesksourceproperties";
/**
 *  Specifies the information that is required to query a particular connector.
**/
export declare class SourceConnectorProperties extends SpeakeasyBase {
    amplitude?: AmplitudeSourceProperties;
    datadog?: DatadogSourceProperties;
    dynatrace?: DynatraceSourceProperties;
    googleAnalytics?: GoogleAnalyticsSourceProperties;
    inforNexus?: InforNexusSourceProperties;
    marketo?: MarketoSourceProperties;
    s3?: S3SourceProperties;
    sapoData?: SapoDataSourceProperties;
    salesforce?: SalesforceSourceProperties;
    serviceNow?: ServiceNowSourceProperties;
    singular?: SingularSourceProperties;
    slack?: SlackSourceProperties;
    trendmicro?: TrendmicroSourceProperties;
    veeva?: VeevaSourceProperties;
    zendesk?: ZendeskSourceProperties;
}
