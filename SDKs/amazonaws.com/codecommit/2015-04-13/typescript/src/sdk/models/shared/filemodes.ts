import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";
import { FileModeTypeEnumEnum } from "./filemodetypeenumenum";


// FileModes
/** 
 * Information about file modes in a merge or pull request.
**/
export class FileModes extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base?: FileModeTypeEnumEnum;

  @Metadata({ data: "json, name=destination" })
  destination?: FileModeTypeEnumEnum;

  @Metadata({ data: "json, name=source" })
  source?: FileModeTypeEnumEnum;
}
