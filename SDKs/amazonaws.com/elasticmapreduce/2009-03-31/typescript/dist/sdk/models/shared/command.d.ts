import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An entity describing an executable that runs on a cluster.
**/
export declare class Command extends SpeakeasyBase {
    args?: string[];
    name?: string;
    scriptPath?: string;
}
