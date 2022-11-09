import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectTypeEnumEnum } from "./objecttypeenumenum";
import { ObjectTypeEnumEnum } from "./objecttypeenumenum";
import { ObjectTypeEnumEnum } from "./objecttypeenumenum";


// ObjectTypes
/** 
 * Information about the type of an object in a merge operation.
**/
export class ObjectTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base?: ObjectTypeEnumEnum;

  @Metadata({ data: "json, name=destination" })
  destination?: ObjectTypeEnumEnum;

  @Metadata({ data: "json, name=source" })
  source?: ObjectTypeEnumEnum;
}
