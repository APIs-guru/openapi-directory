import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";
import { LogTarget } from "./logtarget";



// LogTargetConfiguration
/** 
 * The target configuration.
**/
export class LogTargetConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel?: LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=logTarget" })
  logTarget?: LogTarget;
}
