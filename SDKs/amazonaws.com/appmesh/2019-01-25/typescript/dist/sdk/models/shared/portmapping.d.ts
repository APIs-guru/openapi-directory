import { SpeakeasyBase } from "../../../internal/utils";
import { PortProtocolEnum } from "./portprotocolenum";
/**
 * An object that represents a port mapping.
**/
export declare class PortMapping extends SpeakeasyBase {
    port: number;
    protocol: PortProtocolEnum;
}
