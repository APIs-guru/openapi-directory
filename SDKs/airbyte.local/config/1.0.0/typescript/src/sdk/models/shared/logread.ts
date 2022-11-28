import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logLines" })
  logLines: string[];
}
