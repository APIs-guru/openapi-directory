import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDimension } from "./metricdimension";



// MetricToRetain
/** 
 * The metric you want to retain. Dimensions are optional.
**/
export class MetricToRetain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric: string;

  @SpeakeasyMetadata({ data: "json, name=metricDimension" })
  metricDimension?: MetricDimension;
}
