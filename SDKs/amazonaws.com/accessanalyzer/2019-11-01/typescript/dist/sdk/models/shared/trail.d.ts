import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about the CloudTrail trail being analyzed to generate a policy.
**/
export declare class Trail extends SpeakeasyBase {
    allRegions?: boolean;
    cloudTrailArn: string;
    regions?: string[];
}
