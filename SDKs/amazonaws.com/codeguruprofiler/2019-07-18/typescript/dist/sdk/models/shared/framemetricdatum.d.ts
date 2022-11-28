import { SpeakeasyBase } from "../../../internal/utils";
import { FrameMetric } from "./framemetric";
/**
 *  Information about a frame metric and its values.
**/
export declare class FrameMetricDatum extends SpeakeasyBase {
    frameMetric: FrameMetric;
    values: number[];
}
