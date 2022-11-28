import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfig } from "./destinationconfig";
import { Tag } from "./tag";
import { TimeoutConfig } from "./timeoutconfig";
export declare class OpenTunnelRequest extends SpeakeasyBase {
    description?: string;
    destinationConfig?: DestinationConfig;
    tags?: Tag[];
    timeoutConfig?: TimeoutConfig;
}
