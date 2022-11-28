import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcSecurityGroupMembership
/** 
 * Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.
**/
export class VpcSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcSecurityGroupId" })
  vpcSecurityGroupId?: string;
}
