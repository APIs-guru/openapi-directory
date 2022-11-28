import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";



// SchemaVersionErrorItem
/** 
 * An object that contains the error details for an operation on a schema version.
**/
export class SchemaVersionErrorItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorDetails" })
  errorDetails?: ErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}
