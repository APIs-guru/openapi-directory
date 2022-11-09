import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchQuantumTasksFilterOperatorEnum } from "./searchquantumtasksfilteroperatorenum";


// SearchQuantumTasksFilter
/** 
 * A filter to use to search for tasks.
**/
export class SearchQuantumTasksFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=operator" })
  operator: SearchQuantumTasksFilterOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
