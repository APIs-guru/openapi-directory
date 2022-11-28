import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";



// PolicySummary
/** 
 * Details of the Firewall Manager policy. 
**/
export class PolicySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteUnusedFMManagedResources" })
  deleteUnusedFmManagedResources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PolicyArn" })
  policyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=RemediationEnabled" })
  remediationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityServiceType" })
  securityServiceType?: SecurityServiceTypeEnum;
}
