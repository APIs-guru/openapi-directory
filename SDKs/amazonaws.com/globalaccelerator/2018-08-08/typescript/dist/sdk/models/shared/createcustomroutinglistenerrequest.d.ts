import { SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";
export declare class CreateCustomRoutingListenerRequest extends SpeakeasyBase {
    acceleratorArn: string;
    idempotencyToken: string;
    portRanges: PortRange[];
}
