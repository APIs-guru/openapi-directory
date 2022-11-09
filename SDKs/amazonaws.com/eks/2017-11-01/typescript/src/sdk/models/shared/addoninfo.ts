import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddonVersionInfo } from "./addonversioninfo";


// AddonInfo
/** 
 * Information about an add-on.
**/
export class AddonInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=addonName" })
  addonName?: string;

  @Metadata({ data: "json, name=addonVersions", elemType: shared.AddonVersionInfo })
  addonVersions?: AddonVersionInfo[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
