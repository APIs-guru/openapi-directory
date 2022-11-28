import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddonVersionInfo } from "./addonversioninfo";



// AddonInfo
/** 
 * Information about an add-on.
**/
export class AddonInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addonName" })
  addonName?: string;

  @SpeakeasyMetadata({ data: "json, name=addonVersions", elemType: AddonVersionInfo })
  addonVersions?: AddonVersionInfo[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
