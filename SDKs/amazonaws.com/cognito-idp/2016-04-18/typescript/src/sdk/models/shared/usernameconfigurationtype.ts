import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UsernameConfigurationType
/** 
 * The username configuration type. 
**/
export class UsernameConfigurationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaseSensitive" })
  caseSensitive: boolean;
}
