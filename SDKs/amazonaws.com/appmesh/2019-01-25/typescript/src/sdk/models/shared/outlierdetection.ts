import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";



// OutlierDetection
/** 
 * An object that represents the outlier detection for a virtual node's listener.
**/
export class OutlierDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseEjectionDuration" })
  baseEjectionDuration: Duration;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: Duration;

  @SpeakeasyMetadata({ data: "json, name=maxEjectionPercent" })
  maxEjectionPercent: number;

  @SpeakeasyMetadata({ data: "json, name=maxServerErrors" })
  maxServerErrors: number;
}
