import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the state of an EC2 instance.
**/
export declare class InstanceState extends SpeakeasyBase {
    description?: string;
    instanceId?: string;
    reasonCode?: string;
    state?: string;
}
