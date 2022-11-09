import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogLevelEnum } from "./loglevelenum";


export class GetV2LoggingOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultLogLevel" })
  defaultLogLevel?: LogLevelEnum;

  @Metadata({ data: "json, name=disableAllLogs" })
  disableAllLogs?: boolean;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
