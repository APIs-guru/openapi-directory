import { SpeakeasyBase } from "../../../internal/utils";
import { IpProtocolEnum } from "./ipprotocolenum";
/**
 * <p>A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, GameLift automatically opens two port ranges, one for TCP messaging and one for UDP.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetPortSettings</a> </p>
**/
export declare class IpPermission extends SpeakeasyBase {
    fromPort: number;
    ipRange: string;
    protocol: IpProtocolEnum;
    toPort: number;
}
