import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingLevelEnum } from "./logginglevelenum";


// LoggingOptions
/** 
 * Information about logging options.
**/
export class LoggingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=level" })
  level: LoggingLevelEnum;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
