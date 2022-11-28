import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityGroupMembership
/** 
 * An individual VPC security group and its status.
**/
export class SecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIdentifier" })
  securityGroupIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
