import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Command
/** 
 * An entity describing an executable that runs on a cluster.
**/
export class Command extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ScriptPath" })
  scriptPath?: string;
}
