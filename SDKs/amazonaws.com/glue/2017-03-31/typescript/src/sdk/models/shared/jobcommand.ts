import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobCommand
/** 
 * Specifies code that runs when a job is run.
**/
export class JobCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PythonVersion" })
  pythonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ScriptLocation" })
  scriptLocation?: string;
}
