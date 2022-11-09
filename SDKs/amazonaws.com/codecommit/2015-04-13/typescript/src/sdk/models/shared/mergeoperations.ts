import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChangeTypeEnumEnum } from "./changetypeenumenum";
import { ChangeTypeEnumEnum } from "./changetypeenumenum";


// MergeOperations
/** 
 * Information about the file operation conflicts in a merge operation.
**/
export class MergeOperations extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: ChangeTypeEnumEnum;

  @Metadata({ data: "json, name=source" })
  source?: ChangeTypeEnumEnum;
}
