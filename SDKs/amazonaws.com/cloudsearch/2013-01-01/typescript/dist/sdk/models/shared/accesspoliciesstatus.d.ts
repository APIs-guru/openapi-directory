import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * The configured access rules for the domain's document and search endpoints, and the current status of those rules.
**/
export declare class AccessPoliciesStatus extends SpeakeasyBase {
    options: string;
    status: OptionStatus;
}
