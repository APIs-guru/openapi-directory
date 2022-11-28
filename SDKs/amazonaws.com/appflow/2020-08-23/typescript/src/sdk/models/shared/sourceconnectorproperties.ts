import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Amplitude" })
  amplitude?: AmplitudeSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Datadog" })
  datadog?: DatadogSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Dynatrace" })
  dynatrace?: DynatraceSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: GoogleAnalyticsSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=InforNexus" })
  inforNexus?: InforNexusSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Marketo" })
  marketo?: MarketoSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=S3" })
  s3?: S3SourceProperties;

  @SpeakeasyMetadata({ data: "json, name=SAPOData" })
  sapoData?: SapoDataSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Singular" })
  singular?: SingularSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Slack" })
  slack?: SlackSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Trendmicro" })
  trendmicro?: TrendmicroSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Veeva" })
  veeva?: VeevaSourceProperties;

  @SpeakeasyMetadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskSourceProperties;
}
