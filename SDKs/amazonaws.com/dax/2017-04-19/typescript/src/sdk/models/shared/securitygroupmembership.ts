import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityGroupMembership
/** 
 * An individual VPC security group and its status.
**/
export class SecurityGroupMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIdentifier" })
  securityGroupIdentifier?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
