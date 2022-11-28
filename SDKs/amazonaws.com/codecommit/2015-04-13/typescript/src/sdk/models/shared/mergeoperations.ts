import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeTypeEnumEnum } from "./changetypeenumenum";



// MergeOperations
/** 
 * Information about the file operation conflicts in a merge operation.
**/
export class MergeOperations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: ChangeTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ChangeTypeEnumEnum;
}
