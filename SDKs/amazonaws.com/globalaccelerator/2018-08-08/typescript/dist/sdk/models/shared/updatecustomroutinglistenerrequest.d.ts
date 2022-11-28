import { SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";
export declare class UpdateCustomRoutingListenerRequest extends SpeakeasyBase {
    listenerArn: string;
    portRanges: PortRange[];
}
