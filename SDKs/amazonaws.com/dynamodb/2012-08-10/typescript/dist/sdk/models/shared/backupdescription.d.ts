import { SpeakeasyBase } from "../../../internal/utils";
import { BackupDetails } from "./backupdetails";
import { SourceTableDetails } from "./sourcetabledetails";
import { SourceTableFeatureDetails } from "./sourcetablefeaturedetails";
/**
 * Contains the description of the backup created for the table.
**/
export declare class BackupDescription extends SpeakeasyBase {
    backupDetails?: BackupDetails;
    sourceTableDetails?: SourceTableDetails;
    sourceTableFeatureDetails?: SourceTableFeatureDetails;
}
