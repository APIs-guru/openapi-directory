import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EfsVolumeConfiguration } from "./efsvolumeconfiguration";
import { Host } from "./host";
/**
 * A data volume used in a job's container properties.
**/
export declare class Volume extends SpeakeasyBase {
    efsVolumeConfiguration?: EfsVolumeConfiguration;
    host?: Host;
    name?: string;
}
