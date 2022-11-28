import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeEnumEnum } from "./objecttypeenumenum";



// ObjectTypes
/** 
 * Information about the type of an object in a merge operation.
**/
export class ObjectTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base?: ObjectTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: ObjectTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ObjectTypeEnumEnum;
}
