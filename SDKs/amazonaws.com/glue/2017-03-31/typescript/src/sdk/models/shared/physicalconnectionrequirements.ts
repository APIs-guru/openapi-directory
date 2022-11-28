import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PhysicalConnectionRequirements
/** 
 * Specifies the physical requirements for a connection.
**/
export class PhysicalConnectionRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIdList" })
  securityGroupIdList?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
