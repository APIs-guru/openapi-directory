import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Amplitude" })
  amplitude?: AmplitudeConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Datadog" })
  datadog?: DatadogConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Dynatrace" })
  dynatrace?: DynatraceConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=GoogleAnalytics" })
  googleAnalytics?: GoogleAnalyticsConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=InforNexus" })
  inforNexus?: InforNexusConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Marketo" })
  marketo?: MarketoConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=S3" })
  s3?: S3ConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=SAPOData" })
  sapoData?: SapoDataConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Singular" })
  singular?: SingularConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Slack" })
  slack?: SlackConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Trendmicro" })
  trendmicro?: TrendmicroConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Veeva" })
  veeva?: VeevaConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskConnectorOperatorEnum;
}
