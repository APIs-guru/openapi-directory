import { SpeakeasyBase } from "../../../internal/utils";
import { ClientAffinityEnum } from "./clientaffinityenum";
import { PortRange } from "./portrange";
import { ProtocolEnum } from "./protocolenum";
export declare class UpdateListenerRequest extends SpeakeasyBase {
    clientAffinity?: ClientAffinityEnum;
    listenerArn: string;
    portRanges?: PortRange[];
    protocol?: ProtocolEnum;
}
