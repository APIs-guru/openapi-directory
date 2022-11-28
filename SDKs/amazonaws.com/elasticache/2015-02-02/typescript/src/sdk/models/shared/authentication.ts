import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";



// Authentication
/** 
 * Indicates whether the user requires a password to authenticate.
**/
export class Authentication extends SpeakeasyBase {
  @SpeakeasyMetadata()
  passwordCount?: number;

  @SpeakeasyMetadata()
  type?: AuthenticationTypeEnum;
}
