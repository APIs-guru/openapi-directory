import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QuantumTaskSummary } from "./quantumtasksummary";
export declare class SearchQuantumTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    quantumTasks: QuantumTaskSummary[];
}
