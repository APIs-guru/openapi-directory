import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchAlarmActionErrorEntry } from "./batchalarmactionerrorentry";



export class BatchDisableAlarmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorEntries", elemType: BatchAlarmActionErrorEntry })
  errorEntries?: BatchAlarmActionErrorEntry[];
}
