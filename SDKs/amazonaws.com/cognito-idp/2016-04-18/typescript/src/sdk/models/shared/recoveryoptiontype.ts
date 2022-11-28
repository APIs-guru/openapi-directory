import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecoveryOptionNameTypeEnum } from "./recoveryoptionnametypeenum";



// RecoveryOptionType
/** 
 * A map containing a priority as a key, and recovery method name as a value.
**/
export class RecoveryOptionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: RecoveryOptionNameTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority: number;
}
