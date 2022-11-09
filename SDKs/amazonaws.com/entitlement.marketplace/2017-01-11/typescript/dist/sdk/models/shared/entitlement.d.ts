import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntitlementValue } from "./entitlementvalue";
/**
 * An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.
**/
export declare class Entitlement extends SpeakeasyBase {
    customerIdentifier?: string;
    dimension?: string;
    expirationDate?: Date;
    productCode?: string;
    value?: EntitlementValue;
}
