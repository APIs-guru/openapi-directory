import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyQualifierInfo } from "./policyqualifierinfo";



// PolicyInformation
/** 
 * Defines the X.509 <code>CertificatePolicies</code> extension.
**/
export class PolicyInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertPolicyId" })
  certPolicyId: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyQualifiers", elemType: PolicyQualifierInfo })
  policyQualifiers?: PolicyQualifierInfo[];
}
