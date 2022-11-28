import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentStatusEnum } from "./experimentstatusenum";
/**
 * Describes the state of an experiment.
**/
export declare class ExperimentState extends SpeakeasyBase {
    reason?: string;
    status?: ExperimentStatusEnum;
}
