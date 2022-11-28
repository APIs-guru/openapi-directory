import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceState } from "./instancestate";
/**
 * Describes an instance state change.
**/
export declare class InstanceStateChange extends SpeakeasyBase {
    currentState?: InstanceState;
    instanceId?: string;
    previousState?: InstanceState;
}
