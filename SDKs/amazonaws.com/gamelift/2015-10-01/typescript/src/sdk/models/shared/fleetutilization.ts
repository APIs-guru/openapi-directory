import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FleetUtilization
/** 
 * <p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetUtilization</a> | <a>DescribeFleetLocationUtilization</a> </p>
**/
export class FleetUtilization extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveGameSessionCount" })
  activeGameSessionCount?: number;

  @Metadata({ data: "json, name=ActiveServerProcessCount" })
  activeServerProcessCount?: number;

  @Metadata({ data: "json, name=CurrentPlayerSessionCount" })
  currentPlayerSessionCount?: number;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount?: number;
}
