import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";


// ActionTypeIdentifier
/** 
 * Specifies the category, owner, provider, and version of the action type.
**/
export class ActionTypeIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: ActionCategoryEnum;

  @Metadata({ data: "json, name=owner" })
  owner: string;

  @Metadata({ data: "json, name=provider" })
  provider: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
