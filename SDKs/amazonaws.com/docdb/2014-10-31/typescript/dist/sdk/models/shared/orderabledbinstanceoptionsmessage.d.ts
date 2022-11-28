import { SpeakeasyBase } from "../../../internal/utils";
import { OrderableDbInstanceOption } from "./orderabledbinstanceoption";
/**
 * Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
**/
export declare class OrderableDbInstanceOptionsMessage extends SpeakeasyBase {
    marker?: string;
    orderableDbInstanceOptions?: OrderableDbInstanceOption[];
}
