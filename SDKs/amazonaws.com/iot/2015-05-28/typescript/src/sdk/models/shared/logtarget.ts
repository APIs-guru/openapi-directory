import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogTargetTypeEnum } from "./logtargettypeenum";


// LogTarget
/** 
 * A log target.
**/
export class LogTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetName" })
  targetName?: string;

  @Metadata({ data: "json, name=targetType" })
  targetType: LogTargetTypeEnum;
}
