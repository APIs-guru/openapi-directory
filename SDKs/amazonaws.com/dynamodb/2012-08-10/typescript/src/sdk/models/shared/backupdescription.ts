import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupDetails } from "./backupdetails";
import { SourceTableDetails } from "./sourcetabledetails";
import { SourceTableFeatureDetails } from "./sourcetablefeaturedetails";



// BackupDescription
/** 
 * Contains the description of the backup created for the table.
**/
export class BackupDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupDetails" })
  backupDetails?: BackupDetails;

  @SpeakeasyMetadata({ data: "json, name=SourceTableDetails" })
  sourceTableDetails?: SourceTableDetails;

  @SpeakeasyMetadata({ data: "json, name=SourceTableFeatureDetails" })
  sourceTableFeatureDetails?: SourceTableFeatureDetails;
}
