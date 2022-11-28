import { SpeakeasyBase } from "../../../internal/utils";
import { DiskImageDescription } from "./diskimagedescription";
import { DiskImageVolumeDescription } from "./diskimagevolumedescription";
/**
 * Describes an import volume task.
**/
export declare class ImportInstanceVolumeDetailItem extends SpeakeasyBase {
    availabilityZone?: string;
    bytesConverted?: number;
    description?: string;
    image?: DiskImageDescription;
    status?: string;
    statusMessage?: string;
    volume?: DiskImageVolumeDescription;
}
