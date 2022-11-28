import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";



export class GetActionTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: ActionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
