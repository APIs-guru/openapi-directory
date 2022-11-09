import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Duration } from "./duration";
import { Duration } from "./duration";


// OutlierDetection
/** 
 * An object that represents the outlier detection for a virtual node's listener.
**/
export class OutlierDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseEjectionDuration" })
  baseEjectionDuration: Duration;

  @Metadata({ data: "json, name=interval" })
  interval: Duration;

  @Metadata({ data: "json, name=maxEjectionPercent" })
  maxEjectionPercent: number;

  @Metadata({ data: "json, name=maxServerErrors" })
  maxServerErrors: number;
}
