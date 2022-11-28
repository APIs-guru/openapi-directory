import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchemaVersionNumber
/** 
 * A structure containing the schema version information.
**/
export class SchemaVersionNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LatestVersion" })
  latestVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}
