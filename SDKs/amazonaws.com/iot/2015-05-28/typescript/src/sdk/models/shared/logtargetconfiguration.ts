import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogLevelEnum } from "./loglevelenum";
import { LogTarget } from "./logtarget";


// LogTargetConfiguration
/** 
 * The target configuration.
**/
export class LogTargetConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=logLevel" })
  logLevel?: LogLevelEnum;

  @Metadata({ data: "json, name=logTarget" })
  logTarget?: LogTarget;
}
