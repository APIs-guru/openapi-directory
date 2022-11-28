import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's <a>RuntimeConfiguration</a>.
**/
export declare class ServerProcess extends SpeakeasyBase {
    concurrentExecutions: number;
    launchPath: string;
    parameters?: string;
}
