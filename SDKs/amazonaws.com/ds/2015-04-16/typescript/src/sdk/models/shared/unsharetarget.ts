import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetTypeEnum } from "./targettypeenum";


// UnshareTarget
/** 
 * Identifier that contains details about the directory consumer account with whom the directory is being unshared.
**/
export class UnshareTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Type" })
  type: TargetTypeEnum;
}
