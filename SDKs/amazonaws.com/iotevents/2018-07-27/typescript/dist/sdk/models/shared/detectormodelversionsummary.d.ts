import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationMethodEnum } from "./evaluationmethodenum";
import { DetectorModelVersionStatusEnum } from "./detectormodelversionstatusenum";
/**
 * Information about the detector model version.
**/
export declare class DetectorModelVersionSummary extends SpeakeasyBase {
    creationTime?: Date;
    detectorModelArn?: string;
    detectorModelName?: string;
    detectorModelVersion?: string;
    evaluationMethod?: EvaluationMethodEnum;
    lastUpdateTime?: Date;
    roleArn?: string;
    status?: DetectorModelVersionStatusEnum;
}
