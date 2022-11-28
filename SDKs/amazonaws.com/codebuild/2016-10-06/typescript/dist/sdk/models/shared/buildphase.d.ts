import { SpeakeasyBase } from "../../../internal/utils";
import { PhaseContext } from "./phasecontext";
import { StatusTypeEnum } from "./statustypeenum";
import { BuildPhaseTypeEnum } from "./buildphasetypeenum";
/**
 * Information about a stage for a build.
**/
export declare class BuildPhase extends SpeakeasyBase {
    contexts?: PhaseContext[];
    durationInSeconds?: number;
    endTime?: Date;
    phaseStatus?: StatusTypeEnum;
    phaseType?: BuildPhaseTypeEnum;
    startTime?: Date;
}
