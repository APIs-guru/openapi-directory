import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyQualifierIdEnum } from "./policyqualifieridenum";
import { Qualifier } from "./qualifier";


// PolicyQualifierInfo
/** 
 * Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. ACM Private CA supports the certification practice statement (CPS) qualifier.
**/
export class PolicyQualifierInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyQualifierId" })
  policyQualifierId: PolicyQualifierIdEnum;

  @Metadata({ data: "json, name=Qualifier" })
  qualifier: Qualifier;
}
