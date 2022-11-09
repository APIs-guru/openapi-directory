import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PhysicalConnectionRequirements
/** 
 * Specifies the physical requirements for a connection.
**/
export class PhysicalConnectionRequirements extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=SecurityGroupIdList" })
  securityGroupIdList?: string[];

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
