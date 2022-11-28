import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogTargetTypeEnum } from "./logtargettypeenum";



// LogTarget
/** 
 * A log target.
**/
export class LogTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetName" })
  targetName?: string;

  @SpeakeasyMetadata({ data: "json, name=targetType" })
  targetType: LogTargetTypeEnum;
}
