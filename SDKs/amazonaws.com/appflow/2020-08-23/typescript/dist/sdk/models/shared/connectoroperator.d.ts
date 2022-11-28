import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 *  The operation to be performed on the provided source fields.
**/
export declare class ConnectorOperator extends SpeakeasyBase {
    amplitude?: AmplitudeConnectorOperatorEnum;
    datadog?: DatadogConnectorOperatorEnum;
    dynatrace?: DynatraceConnectorOperatorEnum;
    googleAnalytics?: GoogleAnalyticsConnectorOperatorEnum;
    inforNexus?: InforNexusConnectorOperatorEnum;
    marketo?: MarketoConnectorOperatorEnum;
    s3?: S3ConnectorOperatorEnum;
    sapoData?: SapoDataConnectorOperatorEnum;
    salesforce?: SalesforceConnectorOperatorEnum;
    serviceNow?: ServiceNowConnectorOperatorEnum;
    singular?: SingularConnectorOperatorEnum;
    slack?: SlackConnectorOperatorEnum;
    trendmicro?: TrendmicroConnectorOperatorEnum;
    veeva?: VeevaConnectorOperatorEnum;
    zendesk?: ZendeskConnectorOperatorEnum;
}
