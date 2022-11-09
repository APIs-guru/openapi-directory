import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FrameMetric } from "./framemetric";


// FrameMetricDatum
/** 
 *  Information about a frame metric and its values. 
**/
export class FrameMetricDatum extends SpeakeasyBase {
  @Metadata({ data: "json, name=frameMetric" })
  frameMetric: FrameMetric;

  @Metadata({ data: "json, name=values" })
  values: number[];
}
