import { SpeakeasyBase } from "../../../internal/utils";
import { ClientAffinityEnum } from "./clientaffinityenum";
import { PortRange } from "./portrange";
import { ProtocolEnum } from "./protocolenum";
export declare class CreateListenerRequest extends SpeakeasyBase {
    acceleratorArn: string;
    clientAffinity?: ClientAffinityEnum;
    idempotencyToken: string;
    portRanges: PortRange[];
    protocol: ProtocolEnum;
}
