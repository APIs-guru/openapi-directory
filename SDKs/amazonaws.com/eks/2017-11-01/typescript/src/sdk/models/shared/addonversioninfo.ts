import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Compatibility } from "./compatibility";



// AddonVersionInfo
/** 
 * Information about an add-on version.
**/
export class AddonVersionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addonVersion" })
  addonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: string[];

  @SpeakeasyMetadata({ data: "json, name=compatibilities", elemType: Compatibility })
  compatibilities?: Compatibility[];
}
