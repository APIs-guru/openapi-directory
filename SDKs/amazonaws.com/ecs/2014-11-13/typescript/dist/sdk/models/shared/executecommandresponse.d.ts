import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
export declare class ExecuteCommandResponse extends SpeakeasyBase {
    clusterArn?: string;
    containerArn?: string;
    containerName?: string;
    interactive?: boolean;
    session?: Session;
    taskArn?: string;
}
