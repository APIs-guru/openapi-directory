import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>.
**/
export declare class ConnectorEntity extends SpeakeasyBase {
    hasNestedEntities?: boolean;
    label?: string;
    name: string;
}
