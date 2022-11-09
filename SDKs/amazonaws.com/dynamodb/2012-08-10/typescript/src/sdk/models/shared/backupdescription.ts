import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupDetails } from "./backupdetails";
import { SourceTableDetails } from "./sourcetabledetails";
import { SourceTableFeatureDetails } from "./sourcetablefeaturedetails";


// BackupDescription
/** 
 * Contains the description of the backup created for the table.
**/
export class BackupDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupDetails" })
  backupDetails?: BackupDetails;

  @Metadata({ data: "json, name=SourceTableDetails" })
  sourceTableDetails?: SourceTableDetails;

  @Metadata({ data: "json, name=SourceTableFeatureDetails" })
  sourceTableFeatureDetails?: SourceTableFeatureDetails;
}
