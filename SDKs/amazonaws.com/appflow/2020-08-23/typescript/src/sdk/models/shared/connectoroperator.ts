import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AmplitudeConnectorOperatorEnum } from "./amplitudeconnectoroperatorenum";
import { DatadogConnectorOperatorEnum } from "./datadogconnectoroperatorenum";
import { DynatraceConnectorOperatorEnum } from "./dynatraceconnectoroperatorenum";
import { GoogleAnalyticsConnectorOperatorEnum } from "./googleanalyticsconnectoroperatorenum";
import { InforNexusConnectorOperatorEnum } from "./infornexusconnectoroperatorenum";
import { MarketoConnectorOperatorEnum } from "./marketoconnectoroperatorenum";
import { S3ConnectorOperatorEnum } from "./s3connectoroperatorenum";
import { SapoDataConnectorOperatorEnum } from "./sapodataconnectoroperatorenum";
import { SalesforceConnectorOperatorEnum } from "./salesforceconnectoroperatorenum";
import { ServiceNowConnectorOperatorEnum } from "./servicenowconnectoroperatorenum";
import { SingularConnectorOperatorEnum } from "./singularconnectoroperatorenum";
import { SlackConnectorOperatorEnum } from "./slackconnectoroperatorenum";
import { TrendmicroConnectorOperatorEnum } from "./trendmicroconnectoroperatorenum";
import { VeevaConnectorOperatorEnum } from "./veevaconnectoroperatorenum";
import { ZendeskConnectorOperatorEnum } from "./zendeskconnectoroperatorenum";


// ConnectorOperator
/** 
 *  The operation to be performed on the provided source fields. 
**/
export class ConnectorOperator extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amplitude" })
  amplitude?: AmplitudeConnectorOperatorEnum;

  @Metadata({ data: "json, name=Datadog" })
  datadog?: DatadogConnectorOperatorEnum;

  @Metadata({ data: "json, name=Dynatrace" })
  dynatrace?: DynatraceConnectorOperatorEnum;

  @Metadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: GoogleAnalyticsConnectorOperatorEnum;

  @Metadata({ data: "json, name=InforNexus" })
  inforNexus?: InforNexusConnectorOperatorEnum;

  @Metadata({ data: "json, name=Marketo" })
  marketo?: MarketoConnectorOperatorEnum;

  @Metadata({ data: "json, name=S3" })
  s3?: S3ConnectorOperatorEnum;

  @Metadata({ data: "json, name=SAPOData" })
  sapoData?: SapoDataConnectorOperatorEnum;

  @Metadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceConnectorOperatorEnum;

  @Metadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowConnectorOperatorEnum;

  @Metadata({ data: "json, name=Singular" })
  singular?: SingularConnectorOperatorEnum;

  @Metadata({ data: "json, name=Slack" })
  slack?: SlackConnectorOperatorEnum;

  @Metadata({ data: "json, name=Trendmicro" })
  trendmicro?: TrendmicroConnectorOperatorEnum;

  @Metadata({ data: "json, name=Veeva" })
  veeva?: VeevaConnectorOperatorEnum;

  @Metadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskConnectorOperatorEnum;
}
