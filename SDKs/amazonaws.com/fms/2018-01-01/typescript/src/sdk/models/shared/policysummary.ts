import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";


// PolicySummary
/** 
 * Details of the Firewall Manager policy. 
**/
export class PolicySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteUnusedFMManagedResources" })
  deleteUnusedFmManagedResources?: boolean;

  @Metadata({ data: "json, name=PolicyArn" })
  policyArn?: string;

  @Metadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @Metadata({ data: "json, name=RemediationEnabled" })
  remediationEnabled?: boolean;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=SecurityServiceType" })
  securityServiceType?: SecurityServiceTypeEnum;
}
