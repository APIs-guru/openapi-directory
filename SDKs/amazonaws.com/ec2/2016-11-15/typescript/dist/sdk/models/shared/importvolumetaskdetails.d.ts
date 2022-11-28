import { SpeakeasyBase } from "../../../internal/utils";
import { DiskImageDescription } from "./diskimagedescription";
import { DiskImageVolumeDescription } from "./diskimagevolumedescription";
/**
 * Describes an import volume task.
**/
export declare class ImportVolumeTaskDetails extends SpeakeasyBase {
    availabilityZone?: string;
    bytesConverted?: number;
    description?: string;
    image?: DiskImageDescription;
    volume?: DiskImageVolumeDescription;
}
