import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOntapVolumeConfiguration } from "./createontapvolumeconfiguration";
import { Tag } from "./tag";
export declare class CreateVolumeFromBackupRequest extends SpeakeasyBase {
    backupId: string;
    clientRequestToken?: string;
    name: string;
    ontapConfiguration?: CreateOntapVolumeConfiguration;
    tags?: Tag[];
}
