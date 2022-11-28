import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectorDebugOption } from "./detectordebugoption";
import { LoggingLevelEnum } from "./logginglevelenum";



// LoggingOptions
/** 
 * The values of the AWS IoT Events logging options.
**/
export class LoggingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorDebugOptions", elemType: DetectorDebugOption })
  detectorDebugOptions?: DetectorDebugOption[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level: LoggingLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
