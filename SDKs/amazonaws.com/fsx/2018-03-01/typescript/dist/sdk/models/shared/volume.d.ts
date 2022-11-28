import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeLifecycleEnum } from "./volumelifecycleenum";
import { LifecycleTransitionReason } from "./lifecycletransitionreason";
import { OntapVolumeConfiguration } from "./ontapvolumeconfiguration";
import { Tag } from "./tag";
import { VolumeTypeEnum } from "./volumetypeenum";
/**
 * Describes an Amazon FSx for NetApp ONTAP volume.
**/
export declare class Volume extends SpeakeasyBase {
    creationTime?: Date;
    fileSystemId?: string;
    lifecycle?: VolumeLifecycleEnum;
    lifecycleTransitionReason?: LifecycleTransitionReason;
    name?: string;
    ontapConfiguration?: OntapVolumeConfiguration;
    resourceArn?: string;
    tags?: Tag[];
    volumeId?: string;
    volumeType?: VolumeTypeEnum;
}
