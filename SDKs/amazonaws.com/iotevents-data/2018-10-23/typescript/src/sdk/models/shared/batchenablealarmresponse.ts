import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchAlarmActionErrorEntry } from "./batchalarmactionerrorentry";



export class BatchEnableAlarmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorEntries", elemType: BatchAlarmActionErrorEntry })
  errorEntries?: BatchAlarmActionErrorEntry[];
}
