import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTag } from "./resourcetag";
import { SecurityServicePolicyData } from "./securityservicepolicydata";



// Policy
/** 
 * An Firewall Manager policy.
**/
export class Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteUnusedFMManagedResources" })
  deleteUnusedFmManagedResources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExcludeMap" })
  excludeMap?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ExcludeResourceTags" })
  excludeResourceTags: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeMap" })
  includeMap?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyUpdateToken" })
  policyUpdateToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RemediationEnabled" })
  remediationEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResourceTags", elemType: ResourceTag })
  resourceTags?: ResourceTag[];

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceTypeList" })
  resourceTypeList?: string[];

  @SpeakeasyMetadata({ data: "json, name=SecurityServicePolicyData" })
  securityServicePolicyData: SecurityServicePolicyData;
}
