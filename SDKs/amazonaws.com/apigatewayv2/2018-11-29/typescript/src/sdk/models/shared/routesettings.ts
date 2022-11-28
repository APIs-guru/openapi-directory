import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingLevelEnum } from "./logginglevelenum";



// RouteSettings
/** 
 * Represents a collection of route settings.
**/
export class RouteSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DetailedMetricsEnabled" })
  detailedMetricsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: LoggingLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: number;
}
