import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyQualifierInfo } from "./policyqualifierinfo";
/**
 * Defines the X.509 <code>CertificatePolicies</code> extension.
**/
export declare class PolicyInformation extends SpeakeasyBase {
    certPolicyId: string;
    policyQualifiers?: PolicyQualifierInfo[];
}
