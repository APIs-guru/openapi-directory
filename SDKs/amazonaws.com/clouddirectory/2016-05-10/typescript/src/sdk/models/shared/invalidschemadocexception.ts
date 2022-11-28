import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidSchemaDocException
/** 
 * Indicates that the provided <code>SchemaDoc</code> value is not valid.
**/
export class InvalidSchemaDocException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
