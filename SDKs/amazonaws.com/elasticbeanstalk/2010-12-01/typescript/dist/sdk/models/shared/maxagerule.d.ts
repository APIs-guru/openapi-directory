import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A lifecycle rule that deletes application versions after the specified number of days.
**/
export declare class MaxAgeRule extends SpeakeasyBase {
    deleteSourceFromS3?: boolean;
    enabled: boolean;
    maxAgeInDays?: number;
}
