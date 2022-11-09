import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationMethodEnum } from "./evaluationmethodenum";
import { DetectorModelVersionStatusEnum } from "./detectormodelversionstatusenum";
/**
 * Information about how the detector model is configured.
**/
export declare class DetectorModelConfiguration extends SpeakeasyBase {
    creationTime?: Date;
    detectorModelArn?: string;
    detectorModelDescription?: string;
    detectorModelName?: string;
    detectorModelVersion?: string;
    evaluationMethod?: EvaluationMethodEnum;
    key?: string;
    lastUpdateTime?: Date;
    roleArn?: string;
    status?: DetectorModelVersionStatusEnum;
}
