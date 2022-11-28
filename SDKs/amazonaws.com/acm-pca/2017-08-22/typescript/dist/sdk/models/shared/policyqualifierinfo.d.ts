import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyQualifierIdEnum } from "./policyqualifieridenum";
import { Qualifier } from "./qualifier";
/**
 * Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. ACM Private CA supports the certification practice statement (CPS) qualifier.
**/
export declare class PolicyQualifierInfo extends SpeakeasyBase {
    policyQualifierId: PolicyQualifierIdEnum;
    qualifier: Qualifier;
}
