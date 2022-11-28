import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateOntapVolumeConfiguration } from "./updateontapvolumeconfiguration";
export declare class UpdateVolumeRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    ontapConfiguration?: UpdateOntapVolumeConfiguration;
    volumeId: string;
}
