import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConditionCheck } from "./conditioncheck";
import { Delete } from "./delete";
import { Put } from "./put";
import { Update } from "./update";


// TransactWriteItem
/** 
 * A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.
**/
export class TransactWriteItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConditionCheck" })
  conditionCheck?: ConditionCheck;

  @Metadata({ data: "json, name=Delete" })
  delete?: Delete;

  @Metadata({ data: "json, name=Put" })
  put?: Put;

  @Metadata({ data: "json, name=Update" })
  update?: Update;
}
