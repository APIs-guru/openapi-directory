import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataRetrievalRule } from "./dataretrievalrule";


// DataRetrievalPolicy
/** 
 * Data retrieval policy.
**/
export class DataRetrievalPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rules", elemType: shared.DataRetrievalRule })
  rules?: DataRetrievalRule[];
}
