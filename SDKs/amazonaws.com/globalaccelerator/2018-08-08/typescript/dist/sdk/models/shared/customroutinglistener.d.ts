import { SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";
/**
 * A complex type for a listener for a custom routing accelerator.
**/
export declare class CustomRoutingListener extends SpeakeasyBase {
    listenerArn?: string;
    portRanges?: PortRange[];
}
