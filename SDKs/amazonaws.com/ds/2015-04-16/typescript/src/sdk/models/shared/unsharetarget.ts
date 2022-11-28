import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { TargetTypeEnum } from "./targettypeenum";



// UnshareTarget
/** 
 * Identifier that contains details about the directory consumer account with whom the directory is being unshared.
**/
export class UnshareTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: TargetTypeEnum;
}
