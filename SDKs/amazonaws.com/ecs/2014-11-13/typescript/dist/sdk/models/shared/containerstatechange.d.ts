import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkBinding } from "./networkbinding";
/**
 * An object representing a change in state for a container.
**/
export declare class ContainerStateChange extends SpeakeasyBase {
    containerName?: string;
    exitCode?: number;
    imageDigest?: string;
    networkBindings?: NetworkBinding[];
    reason?: string;
    runtimeId?: string;
    status?: string;
}
