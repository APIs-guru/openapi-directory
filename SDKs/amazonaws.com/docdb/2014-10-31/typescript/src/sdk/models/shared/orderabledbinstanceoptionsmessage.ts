import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderableDbInstanceOption } from "./orderabledbinstanceoption";



// OrderableDbInstanceOptionsMessage
/** 
 * Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
**/
export class OrderableDbInstanceOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OrderableDbInstanceOption })
  orderableDbInstanceOptions?: OrderableDbInstanceOption[];
}
