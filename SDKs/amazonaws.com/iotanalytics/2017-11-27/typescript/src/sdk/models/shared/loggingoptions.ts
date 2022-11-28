import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingLevelEnum } from "./logginglevelenum";



// LoggingOptions
/** 
 * Information about logging options.
**/
export class LoggingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level: LoggingLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
