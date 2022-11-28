import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecoveryOptionType } from "./recoveryoptiontype";



// AccountRecoverySettingType
/** 
 * The data type for <code>AccountRecoverySetting</code>.
**/
export class AccountRecoverySettingType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecoveryMechanisms", elemType: RecoveryOptionType })
  recoveryMechanisms?: RecoveryOptionType[];
}
