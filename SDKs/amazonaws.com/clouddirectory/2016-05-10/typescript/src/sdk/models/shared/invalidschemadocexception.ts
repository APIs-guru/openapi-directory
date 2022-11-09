import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidSchemaDocException
/** 
 * Indicates that the provided <code>SchemaDoc</code> value is not valid.
**/
export class InvalidSchemaDocException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
