import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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


// SourceConnectorProperties
/** 
 *  Specifies the information that is required to query a particular connector. 
**/
export class SourceConnectorProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amplitude" })
  amplitude?: AmplitudeSourceProperties;

  @Metadata({ data: "json, name=Datadog" })
  datadog?: DatadogSourceProperties;

  @Metadata({ data: "json, name=Dynatrace" })
  dynatrace?: DynatraceSourceProperties;

  @Metadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: GoogleAnalyticsSourceProperties;

  @Metadata({ data: "json, name=InforNexus" })
  inforNexus?: InforNexusSourceProperties;

  @Metadata({ data: "json, name=Marketo" })
  marketo?: MarketoSourceProperties;

  @Metadata({ data: "json, name=S3" })
  s3?: S3SourceProperties;

  @Metadata({ data: "json, name=SAPOData" })
  sapoData?: SapoDataSourceProperties;

  @Metadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceSourceProperties;

  @Metadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowSourceProperties;

  @Metadata({ data: "json, name=Singular" })
  singular?: SingularSourceProperties;

  @Metadata({ data: "json, name=Slack" })
  slack?: SlackSourceProperties;

  @Metadata({ data: "json, name=Trendmicro" })
  trendmicro?: TrendmicroSourceProperties;

  @Metadata({ data: "json, name=Veeva" })
  veeva?: VeevaSourceProperties;

  @Metadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskSourceProperties;
}
