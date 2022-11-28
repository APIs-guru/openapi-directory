import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeModification } from "./volumemodification";
export declare class DescribeVolumesModificationsResult extends SpeakeasyBase {
    nextToken?: string;
    volumesModifications?: VolumeModification[];
}
