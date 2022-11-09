import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpPermission } from "./ippermission";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";


// DescribeFleetPortSettingsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetPortSettingsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=InboundPermissions", elemType: shared.IpPermission })
  inboundPermissions?: IpPermission[];

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=UpdateStatus" })
  updateStatus?: LocationUpdateStatusEnum;
}
