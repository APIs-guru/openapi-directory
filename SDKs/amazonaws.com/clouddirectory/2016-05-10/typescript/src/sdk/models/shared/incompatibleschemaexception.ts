import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IncompatibleSchemaException
/** 
 * Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.
**/
export class IncompatibleSchemaException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
