import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceResizePolicy } from "./instanceresizepolicy";
/**
 * Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.
**/
export declare class ShrinkPolicy extends SpeakeasyBase {
    decommissionTimeout?: number;
    instanceResizePolicy?: InstanceResizePolicy;
}
