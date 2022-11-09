import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderEnumEnum } from "./orderenumenum";
import { SortByEnumEnum } from "./sortbyenumenum";


// ListRepositoriesInput
/** 
 * Represents the input of a list repositories operation.
**/
export class ListRepositoriesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=order" })
  order?: OrderEnumEnum;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: SortByEnumEnum;
}
