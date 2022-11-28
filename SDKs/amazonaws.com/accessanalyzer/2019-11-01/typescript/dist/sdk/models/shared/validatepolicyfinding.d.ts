import { SpeakeasyBase } from "../../../internal/utils";
import { ValidatePolicyFindingTypeEnum } from "./validatepolicyfindingtypeenum";
import { Location } from "./location";
/**
 * A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.
**/
export declare class ValidatePolicyFinding extends SpeakeasyBase {
    findingDetails: string;
    findingType: ValidatePolicyFindingTypeEnum;
    issueCode: string;
    learnMoreLink: string;
    locations: Location[];
}
