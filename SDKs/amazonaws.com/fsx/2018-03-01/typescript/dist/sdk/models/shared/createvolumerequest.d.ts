import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOntapVolumeConfiguration } from "./createontapvolumeconfiguration";
import { Tag } from "./tag";
import { VolumeTypeEnum } from "./volumetypeenum";
export declare class CreateVolumeRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    name: string;
    ontapConfiguration?: CreateOntapVolumeConfiguration;
    tags?: Tag[];
    volumeType: VolumeTypeEnum;
}
