import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The request object for the <code>CreateBackup</code> operation.
**/
export declare class CreateBackupRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    fileSystemId?: string;
    tags?: Tag[];
    volumeId?: string;
}
