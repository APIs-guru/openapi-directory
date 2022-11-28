import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConditionCheck } from "./conditioncheck";
import { Delete } from "./delete";
import { Put } from "./put";
import { Update } from "./update";



// TransactWriteItem
/** 
 * A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.
**/
export class TransactWriteItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConditionCheck" })
  conditionCheck?: ConditionCheck;

  @SpeakeasyMetadata({ data: "json, name=Delete" })
  delete?: Delete;

  @SpeakeasyMetadata({ data: "json, name=Put" })
  put?: Put;

  @SpeakeasyMetadata({ data: "json, name=Update" })
  update?: Update;
}
