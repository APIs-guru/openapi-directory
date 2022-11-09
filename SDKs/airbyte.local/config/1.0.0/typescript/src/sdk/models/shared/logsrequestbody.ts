import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogTypeEnum } from "./logtypeenum";


export class LogsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=logType" })
  logType: LogTypeEnum;
}
