import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VolumeLifecycleEnum } from "./volumelifecycleenum";
import { DeleteVolumeOntapResponse } from "./deletevolumeontapresponse";


export class DeleteVolumeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: VolumeLifecycleEnum;

  @Metadata({ data: "json, name=OntapResponse" })
  ontapResponse?: DeleteVolumeOntapResponse;

  @Metadata({ data: "json, name=VolumeId" })
  volumeId?: string;
}
