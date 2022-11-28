import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A set of rules used to make a recommendation during an analysis.
**/
export declare class Pattern extends SpeakeasyBase {
    countersToAggregate?: string[];
    description?: string;
    id?: string;
    name?: string;
    resolutionSteps?: string;
    targetFrames?: string[][];
    thresholdPercent?: number;
}
