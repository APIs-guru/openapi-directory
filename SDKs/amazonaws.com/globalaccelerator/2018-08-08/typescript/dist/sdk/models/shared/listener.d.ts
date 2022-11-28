import { SpeakeasyBase } from "../../../internal/utils";
import { ClientAffinityEnum } from "./clientaffinityenum";
import { PortRange } from "./portrange";
import { ProtocolEnum } from "./protocolenum";
/**
 * A complex type for a listener.
**/
export declare class Listener extends SpeakeasyBase {
    clientAffinity?: ClientAffinityEnum;
    listenerArn?: string;
    portRanges?: PortRange[];
    protocol?: ProtocolEnum;
}
