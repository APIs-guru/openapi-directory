import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScriptBootstrapActionConfig } from "./scriptbootstrapactionconfig";


// BootstrapActionConfig
/** 
 * Configuration of a bootstrap action.
**/
export class BootstrapActionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ScriptBootstrapAction" })
  scriptBootstrapAction: ScriptBootstrapActionConfig;
}
