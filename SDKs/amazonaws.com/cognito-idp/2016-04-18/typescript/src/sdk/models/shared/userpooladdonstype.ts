import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdvancedSecurityModeTypeEnum } from "./advancedsecuritymodetypeenum";



// UserPoolAddOnsType
/** 
 * The user pool add-ons type.
**/
export class UserPoolAddOnsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdvancedSecurityMode" })
  advancedSecurityMode: AdvancedSecurityModeTypeEnum;
}
