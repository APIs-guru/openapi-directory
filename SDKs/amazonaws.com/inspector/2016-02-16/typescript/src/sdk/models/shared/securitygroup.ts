import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityGroup
/** 
 * Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type.
**/
export class SecurityGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=groupName" })
  groupName?: string;
}
