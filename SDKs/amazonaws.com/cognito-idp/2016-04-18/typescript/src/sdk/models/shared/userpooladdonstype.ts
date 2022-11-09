import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdvancedSecurityModeTypeEnum } from "./advancedsecuritymodetypeenum";


// UserPoolAddOnsType
/** 
 * The user pool add-ons type.
**/
export class UserPoolAddOnsType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdvancedSecurityMode" })
  advancedSecurityMode: AdvancedSecurityModeTypeEnum;
}
