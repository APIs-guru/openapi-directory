import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecoveryOptionType } from "./recoveryoptiontype";


// AccountRecoverySettingType
/** 
 * The data type for <code>AccountRecoverySetting</code>.
**/
export class AccountRecoverySettingType extends SpeakeasyBase {
  @Metadata({ data: "json, name=RecoveryMechanisms", elemType: shared.RecoveryOptionType })
  recoveryMechanisms?: RecoveryOptionType[];
}
