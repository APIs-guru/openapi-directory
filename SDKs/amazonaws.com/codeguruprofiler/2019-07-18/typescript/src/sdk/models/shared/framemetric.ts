import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricTypeEnum } from "./metrictypeenum";


// FrameMetric
/** 
 *  The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
**/
export class FrameMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=frameName" })
  frameName: string;

  @Metadata({ data: "json, name=threadStates" })
  threadStates: string[];

  @Metadata({ data: "json, name=type" })
  type: MetricTypeEnum;
}
