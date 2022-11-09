import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeySchemaElement
/** 
 * A partition key pair consisting of a name and a type.
**/
export class KeySchemaElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Type" })
  type: string;
}
