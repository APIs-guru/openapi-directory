import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Command
/** 
 * An entity describing an executable that runs on a cluster.
**/
export class Command extends SpeakeasyBase {
  @Metadata({ data: "json, name=Args" })
  args?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ScriptPath" })
  scriptPath?: string;
}
