import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";



// DeleteCustomActionTypeInput
/** 
 * Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.
**/
export class DeleteCustomActionTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: ActionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
