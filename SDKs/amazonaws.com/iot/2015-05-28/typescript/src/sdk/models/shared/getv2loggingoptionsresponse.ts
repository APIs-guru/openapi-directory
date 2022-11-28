import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";



export class GetV2LoggingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultLogLevel" })
  defaultLogLevel?: LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=disableAllLogs" })
  disableAllLogs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
