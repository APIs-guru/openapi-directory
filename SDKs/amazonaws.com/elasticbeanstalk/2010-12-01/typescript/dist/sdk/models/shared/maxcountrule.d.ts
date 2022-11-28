import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
**/
export declare class MaxCountRule extends SpeakeasyBase {
    deleteSourceFromS3?: boolean;
    enabled: boolean;
    maxCount?: number;
}
