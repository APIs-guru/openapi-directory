import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServerProcess
/** 
 * A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's <a>RuntimeConfiguration</a>.
**/
export class ServerProcess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConcurrentExecutions" })
  concurrentExecutions: number;

  @SpeakeasyMetadata({ data: "json, name=LaunchPath" })
  launchPath: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: string;
}
