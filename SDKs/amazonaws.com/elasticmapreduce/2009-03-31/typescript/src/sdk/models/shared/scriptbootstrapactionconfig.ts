import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScriptBootstrapActionConfig
/** 
 * Configuration of the script to run during a bootstrap action.
**/
export class ScriptBootstrapActionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path: string;
}
