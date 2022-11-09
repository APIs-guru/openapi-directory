import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddonIssueCodeEnum } from "./addonissuecodeenum";


// AddonIssue
/** 
 * An issue related to an add-on.
**/
export class AddonIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: AddonIssueCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=resourceIds" })
  resourceIds?: string[];
}
