import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePair } from "./keyvaluepair";
import { EnvironmentFile } from "./environmentfile";
import { ResourceRequirement } from "./resourcerequirement";
/**
 * The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
**/
export declare class ContainerOverride extends SpeakeasyBase {
    command?: string[];
    cpu?: number;
    environment?: KeyValuePair[];
    environmentFiles?: EnvironmentFile[];
    memory?: number;
    memoryReservation?: number;
    name?: string;
    resourceRequirements?: ResourceRequirement[];
}
