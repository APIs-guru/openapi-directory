import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScriptBootstrapActionConfig
/** 
 * Configuration of the script to run during a bootstrap action.
**/
export class ScriptBootstrapActionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Args" })
  args?: string[];

  @Metadata({ data: "json, name=Path" })
  path: string;
}
