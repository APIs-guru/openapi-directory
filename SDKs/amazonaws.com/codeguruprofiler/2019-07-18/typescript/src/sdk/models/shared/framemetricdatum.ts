import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FrameMetric } from "./framemetric";



// FrameMetricDatum
/** 
 *  Information about a frame metric and its values. 
**/
export class FrameMetricDatum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frameMetric" })
  frameMetric: FrameMetric;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: number[];
}
