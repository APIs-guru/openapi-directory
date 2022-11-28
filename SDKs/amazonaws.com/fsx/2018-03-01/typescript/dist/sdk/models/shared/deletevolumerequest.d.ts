import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteVolumeOntapConfiguration } from "./deletevolumeontapconfiguration";
export declare class DeleteVolumeRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    ontapConfiguration?: DeleteVolumeOntapConfiguration;
    volumeId: string;
}
