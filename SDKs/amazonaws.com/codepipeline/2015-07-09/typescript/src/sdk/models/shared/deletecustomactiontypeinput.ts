import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";


// DeleteCustomActionTypeInput
/** 
 * Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.
**/
export class DeleteCustomActionTypeInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: ActionCategoryEnum;

  @Metadata({ data: "json, name=provider" })
  provider: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
