import { SpeakeasyBase } from "../../../internal/utils";
import { Compliance } from "./compliance";
/**
 * Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.
**/
export declare class ComplianceByResource extends SpeakeasyBase {
    compliance?: Compliance;
    resourceId?: string;
    resourceType?: string;
}
