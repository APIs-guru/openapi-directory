import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobCommand
/** 
 * Specifies code that runs when a job is run.
**/
export class JobCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PythonVersion" })
  pythonVersion?: string;

  @Metadata({ data: "json, name=ScriptLocation" })
  scriptLocation?: string;
}
