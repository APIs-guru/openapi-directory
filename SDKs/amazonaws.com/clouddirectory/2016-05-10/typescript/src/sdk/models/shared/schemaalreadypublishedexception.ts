import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchemaAlreadyPublishedException
/** 
 * Indicates that a schema is already published.
**/
export class SchemaAlreadyPublishedException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
