import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type.
**/
export declare class Parameters extends SpeakeasyBase {
    excludeBootVolume?: boolean;
    noReboot?: boolean;
}
