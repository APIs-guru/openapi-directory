import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CopyBackupRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    copyTags?: boolean;
    kmsKeyId?: string;
    sourceBackupId: string;
    sourceRegion?: string;
    tags?: Tag[];
}
