import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";



// Metric
/** 
 *  Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame. 
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frameName" })
  frameName: string;

  @SpeakeasyMetadata({ data: "json, name=threadStates" })
  threadStates: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MetricTypeEnum;
}
