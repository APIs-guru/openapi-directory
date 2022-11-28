import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectorEntity
/** 
 *  The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>. 
**/
export class ConnectorEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasNestedEntities" })
  hasNestedEntities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
