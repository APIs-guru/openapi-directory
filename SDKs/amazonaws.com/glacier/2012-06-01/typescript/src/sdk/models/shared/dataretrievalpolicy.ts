import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataRetrievalRule } from "./dataretrievalrule";



// DataRetrievalPolicy
/** 
 * Data retrieval policy.
**/
export class DataRetrievalPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: DataRetrievalRule })
  rules?: DataRetrievalRule[];
}
