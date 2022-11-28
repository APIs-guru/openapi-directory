import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";
import { ActionOwnerEnum } from "./actionownerenum";



// ActionTypeId
/** 
 * Represents information about an action type.
**/
export class ActionTypeId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: ActionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: ActionOwnerEnum;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
