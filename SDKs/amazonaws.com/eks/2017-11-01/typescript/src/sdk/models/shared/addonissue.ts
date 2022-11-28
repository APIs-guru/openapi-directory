import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddonIssueCodeEnum } from "./addonissuecodeenum";



// AddonIssue
/** 
 * An issue related to an add-on.
**/
export class AddonIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: AddonIssueCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceIds" })
  resourceIds?: string[];
}
