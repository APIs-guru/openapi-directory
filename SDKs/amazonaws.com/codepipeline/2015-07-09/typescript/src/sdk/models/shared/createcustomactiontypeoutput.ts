import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionType } from "./actiontype";
import { Tag } from "./tag";


// CreateCustomActionTypeOutput
/** 
 * Represents the output of a <code>CreateCustomActionType</code> operation.
**/
export class CreateCustomActionTypeOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionType" })
  actionType: ActionType;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
