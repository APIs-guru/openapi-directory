import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Marketo" })
  marketo?: MarketoConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=S3" })
  s3?: S3ConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Salesforce" })
  salesforce?: SalesforceConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceNow" })
  serviceNow?: ServiceNowConnectorOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Zendesk" })
  zendesk?: ZendeskConnectorOperatorEnum;
}
