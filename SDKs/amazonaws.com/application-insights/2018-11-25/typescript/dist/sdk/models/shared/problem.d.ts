import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FeedbackValueEnum } from "./feedbackvalueenum";
import { SeverityLevelEnum } from "./severitylevelenum";
import { StatusEnum } from "./statusenum";
/**
 * Describes a problem that is detected by correlating observations.
**/
export declare class Problem extends SpeakeasyBase {
    affectedResource?: string;
    endTime?: Date;
    feedback?: Map<string, FeedbackValueEnum>;
    id?: string;
    insights?: string;
    resourceGroupName?: string;
    severityLevel?: SeverityLevelEnum;
    startTime?: Date;
    status?: StatusEnum;
    title?: string;
}
