import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcSecurityGroupMembership
/** 
 * Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.
**/
export class VpcSecurityGroupMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=VpcSecurityGroupId" })
  vpcSecurityGroupId?: string;
}
