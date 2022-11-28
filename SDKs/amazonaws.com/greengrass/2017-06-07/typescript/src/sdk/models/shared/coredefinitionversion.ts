import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Core } from "./core";



// CoreDefinitionVersion
/** 
 * Information about a core definition version.
**/
export class CoreDefinitionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cores", elemType: Core })
  cores?: Core[];
}
