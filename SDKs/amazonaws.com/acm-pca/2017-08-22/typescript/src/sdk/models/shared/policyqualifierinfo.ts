import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyQualifierIdEnum } from "./policyqualifieridenum";
import { Qualifier } from "./qualifier";



// PolicyQualifierInfo
/** 
 * Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. ACM Private CA supports the certification practice statement (CPS) qualifier.
**/
export class PolicyQualifierInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyQualifierId" })
  policyQualifierId: PolicyQualifierIdEnum;

  @SpeakeasyMetadata({ data: "json, name=Qualifier" })
  qualifier: Qualifier;
}
