import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeLifecycleEnum } from "./volumelifecycleenum";
import { DeleteVolumeOntapResponse } from "./deletevolumeontapresponse";
export declare class DeleteVolumeResponse extends SpeakeasyBase {
    lifecycle?: VolumeLifecycleEnum;
    ontapResponse?: DeleteVolumeOntapResponse;
    volumeId?: string;
}
