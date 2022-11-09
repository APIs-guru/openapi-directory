import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServerProcess
/** 
 * A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's <a>RuntimeConfiguration</a>.
**/
export class ServerProcess extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConcurrentExecutions" })
  concurrentExecutions: number;

  @Metadata({ data: "json, name=LaunchPath" })
  launchPath: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: string;
}
