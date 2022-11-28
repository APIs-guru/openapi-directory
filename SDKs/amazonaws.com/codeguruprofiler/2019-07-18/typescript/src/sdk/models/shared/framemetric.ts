import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";



// FrameMetric
/** 
 *  The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
**/
export class FrameMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frameName" })
  frameName: string;

  @SpeakeasyMetadata({ data: "json, name=threadStates" })
  threadStates: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MetricTypeEnum;
}
