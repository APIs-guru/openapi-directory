import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkInterface } from "./networkinterface";
/**
 * An object representing the details of a container that's part of a job attempt.
**/
export declare class AttemptContainerDetail extends SpeakeasyBase {
    containerInstanceArn?: string;
    exitCode?: number;
    logStreamName?: string;
    networkInterfaces?: NetworkInterface[];
    reason?: string;
    taskArn?: string;
}
