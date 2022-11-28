import { SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";
/**
 * A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
**/
export declare class AccessPoliciesStatus extends SpeakeasyBase {
    options: string;
    status: OptionStatus;
}
