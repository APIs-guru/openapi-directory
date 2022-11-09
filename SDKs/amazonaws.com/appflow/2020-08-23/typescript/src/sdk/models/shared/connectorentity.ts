import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectorEntity
/** 
 *  The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>. 
**/
export class ConnectorEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasNestedEntities" })
  hasNestedEntities?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
