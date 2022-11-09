import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceTag } from "./resourcetag";
import { SecurityServicePolicyData } from "./securityservicepolicydata";


// Policy
/** 
 * An Firewall Manager policy.
**/
export class Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteUnusedFMManagedResources" })
  deleteUnusedFmManagedResources?: boolean;

  @Metadata({ data: "json, name=ExcludeMap" })
  excludeMap?: Map<string, string[]>;

  @Metadata({ data: "json, name=ExcludeResourceTags" })
  excludeResourceTags: boolean;

  @Metadata({ data: "json, name=IncludeMap" })
  includeMap?: Map<string, string[]>;

  @Metadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @Metadata({ data: "json, name=PolicyName" })
  policyName: string;

  @Metadata({ data: "json, name=PolicyUpdateToken" })
  policyUpdateToken?: string;

  @Metadata({ data: "json, name=RemediationEnabled" })
  remediationEnabled: boolean;

  @Metadata({ data: "json, name=ResourceTags", elemType: shared.ResourceTag })
  resourceTags?: ResourceTag[];

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @Metadata({ data: "json, name=ResourceTypeList" })
  resourceTypeList?: string[];

  @Metadata({ data: "json, name=SecurityServicePolicyData" })
  securityServicePolicyData: SecurityServicePolicyData;
}
