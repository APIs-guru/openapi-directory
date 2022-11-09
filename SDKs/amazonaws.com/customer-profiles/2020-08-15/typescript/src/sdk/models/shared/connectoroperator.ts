import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MarketoConnectorOperatorEnum } from "./marketoconnectoroperatorenum";
import { S3ConnectorOperatorEnum } from "./s3connectoroperatorenum";
import { SalesforceConnectorOperatorEnum } from "./salesforceconnectoroperatorenum";
import { ServiceNowConnectorOperatorEnum } from "./servicenowconnectoroperatorenum";
import { ZendeskConnectorOperatorEnum } from "./zendeskconnectoroperatorenum";


// ConnectorOperator
/** 
 * The operation to be performed on the provided source fields.
**/
export class ConnectorOperator extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marketo" })
  marketo?: MarketoConnectorOperatorEnum;

  @Metadata({ data: "json, name=S3" })
  s3?: S3ConnectorOperatorEnum;

  @Metadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceConnectorOperatorEnum;

  @Metadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowConnectorOperatorEnum;

  @Metadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskConnectorOperatorEnum;
}
