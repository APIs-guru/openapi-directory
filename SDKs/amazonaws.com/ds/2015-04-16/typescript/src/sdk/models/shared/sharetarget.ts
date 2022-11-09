import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetTypeEnum } from "./targettypeenum";


// ShareTarget
/** 
 * Identifier that contains details about the directory consumer account.
**/
export class ShareTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Type" })
  type: TargetTypeEnum;
}
