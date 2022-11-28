import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardIdentifierEnum } from "./standardidentifierenum";



// ObjectTypeKey
/** 
 * An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.
**/
export class ObjectTypeKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FieldNames" })
  fieldNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=StandardIdentifiers" })
  standardIdentifiers?: StandardIdentifierEnum[];
}
