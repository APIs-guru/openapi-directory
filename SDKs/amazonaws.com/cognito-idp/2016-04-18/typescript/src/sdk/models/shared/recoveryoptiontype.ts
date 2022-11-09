import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecoveryOptionNameTypeEnum } from "./recoveryoptionnametypeenum";


// RecoveryOptionType
/** 
 * A map containing a priority as a key, and recovery method name as a value.
**/
export class RecoveryOptionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: RecoveryOptionNameTypeEnum;

  @Metadata({ data: "json, name=Priority" })
  priority: number;
}
