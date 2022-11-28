import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";



// ShareTarget
/** 
 * Identifier that contains details about the directory consumer account.
**/
export class ShareTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: TargetTypeEnum;
}
