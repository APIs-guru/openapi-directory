import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VersioningConfiguration
/** 
 * Information about the versioning of dataset contents.
**/
export class VersioningConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxVersions" })
  maxVersions?: number;

  @Metadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}
