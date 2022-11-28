import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchQuantumTasksFilterOperatorEnum } from "./searchquantumtasksfilteroperatorenum";



// SearchQuantumTasksFilter
/** 
 * A filter to use to search for tasks.
**/
export class SearchQuantumTasksFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: SearchQuantumTasksFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
