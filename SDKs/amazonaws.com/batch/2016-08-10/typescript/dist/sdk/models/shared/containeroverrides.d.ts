import { SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyValuePair } from "./keyvaluepair";
import { ResourceRequirement } from "./resourcerequirement";
/**
 * The overrides that should be sent to a container.
**/
export declare class ContainerOverrides extends SpeakeasyBase {
    command?: string[];
    environment?: KeyValuePair[];
    instanceType?: string;
    memory?: number;
    resourceRequirements?: ResourceRequirement[];
    vcpus?: number;
}
