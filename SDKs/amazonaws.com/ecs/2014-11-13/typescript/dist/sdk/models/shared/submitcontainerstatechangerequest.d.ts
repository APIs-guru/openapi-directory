import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkBinding } from "./networkbinding";
export declare class SubmitContainerStateChangeRequest extends SpeakeasyBase {
    cluster?: string;
    containerName?: string;
    exitCode?: number;
    networkBindings?: NetworkBinding[];
    reason?: string;
    runtimeId?: string;
    status?: string;
    task?: string;
}
