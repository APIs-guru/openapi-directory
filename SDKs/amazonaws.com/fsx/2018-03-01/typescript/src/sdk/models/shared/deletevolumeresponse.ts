import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeLifecycleEnum } from "./volumelifecycleenum";
import { DeleteVolumeOntapResponse } from "./deletevolumeontapresponse";



export class DeleteVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle?: VolumeLifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=OntapResponse" })
  ontapResponse?: DeleteVolumeOntapResponse;

  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId?: string;
}
