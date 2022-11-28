import { SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";
/**
 *  Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame.
**/
export declare class Metric extends SpeakeasyBase {
    frameName: string;
    threadStates: string[];
    type: MetricTypeEnum;
}
