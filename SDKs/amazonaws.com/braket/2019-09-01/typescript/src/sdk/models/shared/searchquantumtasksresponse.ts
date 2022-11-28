import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuantumTaskSummary } from "./quantumtasksummary";



export class SearchQuantumTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=quantumTasks", elemType: QuantumTaskSummary })
  quantumTasks: QuantumTaskSummary[];
}
