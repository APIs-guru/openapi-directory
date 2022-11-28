import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeySchemaElement
/** 
 * A partition key pair consisting of a name and a type.
**/
export class KeySchemaElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}
