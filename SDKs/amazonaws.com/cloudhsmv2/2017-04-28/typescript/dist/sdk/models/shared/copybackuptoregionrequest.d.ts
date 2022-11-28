import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CopyBackupToRegionRequest extends SpeakeasyBase {
    backupId: string;
    destinationRegion: string;
    tagList?: Tag[];
}
