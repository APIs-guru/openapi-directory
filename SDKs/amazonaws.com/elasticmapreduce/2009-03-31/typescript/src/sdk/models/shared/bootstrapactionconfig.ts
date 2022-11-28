import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScriptBootstrapActionConfig } from "./scriptbootstrapactionconfig";



// BootstrapActionConfig
/** 
 * Configuration of a bootstrap action.
**/
export class BootstrapActionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ScriptBootstrapAction" })
  scriptBootstrapAction: ScriptBootstrapActionConfig;
}
