import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details for the restore.
**/
export declare class RestoreSummary extends SpeakeasyBase {
    restoreDateTime: Date;
    restoreInProgress: boolean;
    sourceBackupArn?: string;
    sourceTableArn?: string;
}
