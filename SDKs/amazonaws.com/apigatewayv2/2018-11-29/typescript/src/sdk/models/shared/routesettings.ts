import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingLevelEnum } from "./logginglevelenum";


// RouteSettings
/** 
 * Represents a collection of route settings.
**/
export class RouteSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @Metadata({ data: "json, name=DetailedMetricsEnabled" })
  detailedMetricsEnabled?: boolean;

  @Metadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: LoggingLevelEnum;

  @Metadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: number;

  @Metadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: number;
}
