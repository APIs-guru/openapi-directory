import { SpeakeasyBase } from "../../../internal/utils";
import { PhaseContext } from "./phasecontext";
import { StatusTypeEnum } from "./statustypeenum";
import { BuildBatchPhaseTypeEnum } from "./buildbatchphasetypeenum";
/**
 * Contains information about a stage for a batch build.
**/
export declare class BuildBatchPhase extends SpeakeasyBase {
    contexts?: PhaseContext[];
    durationInSeconds?: number;
    endTime?: Date;
    phaseStatus?: StatusTypeEnum;
    phaseType?: BuildBatchPhaseTypeEnum;
    startTime?: Date;
}
