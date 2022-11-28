import { SpeakeasyBase } from "../../../internal/utils";
import { MarketoConnectorOperatorEnum } from "./marketoconnectoroperatorenum";
import { S3ConnectorOperatorEnum } from "./s3connectoroperatorenum";
import { SalesforceConnectorOperatorEnum } from "./salesforceconnectoroperatorenum";
import { ServiceNowConnectorOperatorEnum } from "./servicenowconnectoroperatorenum";
import { ZendeskConnectorOperatorEnum } from "./zendeskconnectoroperatorenum";
/**
 * The operation to be performed on the provided source fields.
**/
export declare class ConnectorOperator extends SpeakeasyBase {
    marketo?: MarketoConnectorOperatorEnum;
    s3?: S3ConnectorOperatorEnum;
    salesforce?: SalesforceConnectorOperatorEnum;
    serviceNow?: ServiceNowConnectorOperatorEnum;
    zendesk?: ZendeskConnectorOperatorEnum;
}
