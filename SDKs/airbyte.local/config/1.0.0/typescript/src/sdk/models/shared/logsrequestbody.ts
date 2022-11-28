import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogTypeEnum } from "./logtypeenum";



export class LogsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logType" })
  logType: LogTypeEnum;
}
