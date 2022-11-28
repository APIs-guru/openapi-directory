import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionType } from "./actiontype";
import { Tag } from "./tag";



// CreateCustomActionTypeOutput
/** 
 * Represents the output of a <code>CreateCustomActionType</code> operation.
**/
export class CreateCustomActionTypeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType: ActionType;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
