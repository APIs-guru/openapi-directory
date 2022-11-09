import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyQualifierInfo } from "./policyqualifierinfo";


// PolicyInformation
/** 
 * Defines the X.509 <code>CertificatePolicies</code> extension.
**/
export class PolicyInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertPolicyId" })
  certPolicyId: string;

  @Metadata({ data: "json, name=PolicyQualifiers", elemType: shared.PolicyQualifierInfo })
  policyQualifiers?: PolicyQualifierInfo[];
}
