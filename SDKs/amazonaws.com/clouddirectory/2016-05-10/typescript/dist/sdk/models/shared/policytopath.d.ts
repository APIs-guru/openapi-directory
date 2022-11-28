import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyAttachment } from "./policyattachment";
/**
 * Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.
**/
export declare class PolicyToPath extends SpeakeasyBase {
    path?: string;
    policies?: PolicyAttachment[];
}
