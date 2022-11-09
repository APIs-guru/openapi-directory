import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetails } from "./errordetails";


// SchemaVersionErrorItem
/** 
 * An object that contains the error details for an operation on a schema version.
**/
export class SchemaVersionErrorItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorDetails" })
  errorDetails?: ErrorDetails;

  @Metadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}
