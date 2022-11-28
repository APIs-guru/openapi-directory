import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddonIssue } from "./addonissue";



// AddonHealth
/** 
 * The health of the add-on.
**/
export class AddonHealth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issues", elemType: AddonIssue })
  issues?: AddonIssue[];
}
