import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderEnumEnum } from "./orderenumenum";
import { SortByEnumEnum } from "./sortbyenumenum";



// ListRepositoriesInput
/** 
 * Represents the input of a list repositories operation.
**/
export class ListRepositoriesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: OrderEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: SortByEnumEnum;
}
