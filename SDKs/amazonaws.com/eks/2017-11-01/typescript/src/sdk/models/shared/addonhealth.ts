import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddonIssue } from "./addonissue";


// AddonHealth
/** 
 * The health of the add-on.
**/
export class AddonHealth extends SpeakeasyBase {
  @Metadata({ data: "json, name=issues", elemType: shared.AddonIssue })
  issues?: AddonIssue[];
}
