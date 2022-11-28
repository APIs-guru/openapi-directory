import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure containing migration status information.
**/
export declare class CatalogImportStatus extends SpeakeasyBase {
    importCompleted?: boolean;
    importTime?: Date;
    importedBy?: string;
}
