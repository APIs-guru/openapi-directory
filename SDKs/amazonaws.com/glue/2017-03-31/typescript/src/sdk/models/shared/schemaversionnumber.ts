import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchemaVersionNumber
/** 
 * A structure containing the schema version information.
**/
export class SchemaVersionNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=LatestVersion" })
  latestVersion?: boolean;

  @Metadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}
