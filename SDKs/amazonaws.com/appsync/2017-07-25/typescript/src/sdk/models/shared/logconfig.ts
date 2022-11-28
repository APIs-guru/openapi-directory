import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLogLevelEnum } from "./fieldloglevelenum";



// LogConfig
/** 
 * The CloudWatch Logs configuration.
**/
export class LogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=excludeVerboseContent" })
  excludeVerboseContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fieldLogLevel" })
  fieldLogLevel: FieldLogLevelEnum;
}
