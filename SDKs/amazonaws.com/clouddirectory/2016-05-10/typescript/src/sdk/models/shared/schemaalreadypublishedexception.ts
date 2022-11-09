import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchemaAlreadyPublishedException
/** 
 * Indicates that a schema is already published.
**/
export class SchemaAlreadyPublishedException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
