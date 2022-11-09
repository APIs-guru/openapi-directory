import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectorDebugOption } from "./detectordebugoption";
import { LoggingLevelEnum } from "./logginglevelenum";


// LoggingOptions
/** 
 * The values of the AWS IoT Events logging options.
**/
export class LoggingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorDebugOptions", elemType: shared.DetectorDebugOption })
  detectorDebugOptions?: DetectorDebugOption[];

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=level" })
  level: LoggingLevelEnum;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
