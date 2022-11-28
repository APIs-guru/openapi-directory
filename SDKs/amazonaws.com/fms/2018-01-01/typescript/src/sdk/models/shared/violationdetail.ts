import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { ResourceViolation } from "./resourceviolation";



// ViolationDetail
/** 
 * Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
**/
export class ViolationDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MemberAccount" })
  memberAccount: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceDescription" })
  resourceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceTags", elemType: Tag })
  resourceTags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceViolations", elemType: ResourceViolation })
  resourceViolations: ResourceViolation[];
}
