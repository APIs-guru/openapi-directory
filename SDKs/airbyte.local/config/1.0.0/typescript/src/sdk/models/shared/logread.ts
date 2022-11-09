import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=logLines" })
  logLines: string[];
}
