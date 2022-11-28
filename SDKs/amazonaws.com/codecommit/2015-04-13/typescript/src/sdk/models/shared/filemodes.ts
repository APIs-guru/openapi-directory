import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";



// FileModes
/** 
 * Information about file modes in a merge or pull request.
**/
export class FileModes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base?: FileModeTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: FileModeTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: FileModeTypeEnumEnum;
}
