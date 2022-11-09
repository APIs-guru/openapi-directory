import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricDimension } from "./metricdimension";


// MetricToRetain
/** 
 * The metric you want to retain. Dimensions are optional.
**/
export class MetricToRetain extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: string;

  @Metadata({ data: "json, name=metricDimension" })
  metricDimension?: MetricDimension;
}
