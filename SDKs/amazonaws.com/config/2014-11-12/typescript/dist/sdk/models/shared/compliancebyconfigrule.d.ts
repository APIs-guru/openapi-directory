import { SpeakeasyBase } from "../../../internal/utils";
import { Compliance } from "./compliance";
/**
 * Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.
**/
export declare class ComplianceByConfigRule extends SpeakeasyBase {
    compliance?: Compliance;
    configRuleName?: string;
}
