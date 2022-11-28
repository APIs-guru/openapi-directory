import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetUtilization</a> | <a>DescribeFleetLocationUtilization</a> </p>
**/
export declare class FleetUtilization extends SpeakeasyBase {
    activeGameSessionCount?: number;
    activeServerProcessCount?: number;
    currentPlayerSessionCount?: number;
    fleetArn?: string;
    fleetId?: string;
    location?: string;
    maximumPlayerSessionCount?: number;
}
