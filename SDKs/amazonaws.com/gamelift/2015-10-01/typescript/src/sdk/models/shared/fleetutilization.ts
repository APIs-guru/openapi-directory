import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FleetUtilization
/** 
 * <p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetUtilization</a> | <a>DescribeFleetLocationUtilization</a> </p>
**/
export class FleetUtilization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveGameSessionCount" })
  activeGameSessionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ActiveServerProcessCount" })
  activeServerProcessCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentPlayerSessionCount" })
  currentPlayerSessionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount?: number;
}
