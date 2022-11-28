import { SpeakeasyBase } from "../../../internal/utils";
import { PortProtocolEnum } from "./portprotocolenum";
/**
 * An object representing a virtual node listener port mapping.
**/
export declare class PortMapping extends SpeakeasyBase {
    port?: number;
    protocol?: PortProtocolEnum;
}
