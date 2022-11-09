import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { ResourceViolation } from "./resourceviolation";


// ViolationDetail
/** 
 * Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
**/
export class ViolationDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=MemberAccount" })
  memberAccount: string;

  @Metadata({ data: "json, name=PolicyId" })
  policyId: string;

  @Metadata({ data: "json, name=ResourceDescription" })
  resourceDescription?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ResourceTags", elemType: shared.Tag })
  resourceTags?: Tag[];

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @Metadata({ data: "json, name=ResourceViolations", elemType: shared.ResourceViolation })
  resourceViolations: ResourceViolation[];
}
