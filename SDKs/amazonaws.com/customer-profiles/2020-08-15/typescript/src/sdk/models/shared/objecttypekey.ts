import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardIdentifierEnum } from "./standardidentifierenum";


// ObjectTypeKey
/** 
 * An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.
**/
export class ObjectTypeKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=FieldNames" })
  fieldNames?: string[];

  @Metadata({ data: "json, name=StandardIdentifiers" })
  standardIdentifiers?: StandardIdentifierEnum[];
}
