import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";



// AllowedPrincipal
/** 
 * Describes a principal.
**/
export class AllowedPrincipal extends SpeakeasyBase {
  @SpeakeasyMetadata()
  principal?: string;

  @SpeakeasyMetadata()
  principalType?: PrincipalTypeEnum;
}
