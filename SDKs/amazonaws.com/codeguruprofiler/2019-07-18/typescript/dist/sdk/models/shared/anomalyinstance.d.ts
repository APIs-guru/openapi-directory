import { SpeakeasyBase } from "../../../internal/utils";
import { UserFeedback } from "./userfeedback";
/**
 * The specific duration in which the metric is flagged as anomalous.
**/
export declare class AnomalyInstance extends SpeakeasyBase {
    endTime?: Date;
    id: string;
    startTime: Date;
    userFeedback?: UserFeedback;
}
