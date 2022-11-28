import { SpeakeasyBase } from "../../../internal/utils";
import { Compliance } from "./compliance";
/**
 * <p>Indicates whether an Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p>
**/
export declare class AggregateComplianceByConfigRule extends SpeakeasyBase {
    accountId?: string;
    awsRegion?: string;
    compliance?: Compliance;
    configRuleName?: string;
}
