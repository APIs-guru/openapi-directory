import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VersioningConfiguration
/** 
 * Information about the versioning of dataset contents.
**/
export class VersioningConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxVersions" })
  maxVersions?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}
