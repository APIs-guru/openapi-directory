import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>.
**/
export declare class PortRange extends SpeakeasyBase {
    maxRange?: number;
    minRange: number;
}
