import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchAlarmActionErrorEntry } from "./batchalarmactionerrorentry";


export class BatchAcknowledgeAlarmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorEntries", elemType: shared.BatchAlarmActionErrorEntry })
  errorEntries?: BatchAlarmActionErrorEntry[];
}
