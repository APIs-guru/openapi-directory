import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Compatibility } from "./compatibility";


// AddonVersionInfo
/** 
 * Information about an add-on version.
**/
export class AddonVersionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=addonVersion" })
  addonVersion?: string;

  @Metadata({ data: "json, name=architecture" })
  architecture?: string[];

  @Metadata({ data: "json, name=compatibilities", elemType: shared.Compatibility })
  compatibilities?: Compatibility[];
}
