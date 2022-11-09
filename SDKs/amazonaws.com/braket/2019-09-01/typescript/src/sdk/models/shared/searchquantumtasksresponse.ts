import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuantumTaskSummary } from "./quantumtasksummary";


export class SearchQuantumTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=quantumTasks", elemType: shared.QuantumTaskSummary })
  quantumTasks: QuantumTaskSummary[];
}
