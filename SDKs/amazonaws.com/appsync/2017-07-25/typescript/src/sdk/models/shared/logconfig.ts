import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldLogLevelEnum } from "./fieldloglevelenum";


// LogConfig
/** 
 * The CloudWatch Logs configuration.
**/
export class LogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn: string;

  @Metadata({ data: "json, name=excludeVerboseContent" })
  excludeVerboseContent?: boolean;

  @Metadata({ data: "json, name=fieldLogLevel" })
  fieldLogLevel: FieldLogLevelEnum;
}
