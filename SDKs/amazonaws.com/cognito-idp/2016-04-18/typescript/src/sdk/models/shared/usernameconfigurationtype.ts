import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsernameConfigurationType
/** 
 * The username configuration type. 
**/
export class UsernameConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaseSensitive" })
  caseSensitive: boolean;
}
