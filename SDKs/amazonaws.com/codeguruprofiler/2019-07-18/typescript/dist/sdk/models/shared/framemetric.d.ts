import { SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";
/**
 *  The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
**/
export declare class FrameMetric extends SpeakeasyBase {
    frameName: string;
    threadStates: string[];
    type: MetricTypeEnum;
}
