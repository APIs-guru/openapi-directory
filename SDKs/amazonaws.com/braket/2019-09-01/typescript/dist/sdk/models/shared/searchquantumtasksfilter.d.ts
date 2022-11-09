import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchQuantumTasksFilterOperatorEnum } from "./searchquantumtasksfilteroperatorenum";
/**
 * A filter to use to search for tasks.
**/
export declare class SearchQuantumTasksFilter extends SpeakeasyBase {
    name: string;
    operator: SearchQuantumTasksFilterOperatorEnum;
    values: string[];
}
