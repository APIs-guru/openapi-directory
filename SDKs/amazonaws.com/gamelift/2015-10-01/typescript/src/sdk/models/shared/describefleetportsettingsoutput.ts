import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpPermission } from "./ippermission";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";



// DescribeFleetPortSettingsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetPortSettingsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=InboundPermissions", elemType: IpPermission })
  inboundPermissions?: IpPermission[];

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateStatus" })
  updateStatus?: LocationUpdateStatusEnum;
}
