import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";
import { ActionOwnerEnum } from "./actionownerenum";


// ActionTypeId
/** 
 * Represents information about an action type.
**/
export class ActionTypeId extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: ActionCategoryEnum;

  @Metadata({ data: "json, name=owner" })
  owner: ActionOwnerEnum;

  @Metadata({ data: "json, name=provider" })
  provider: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
