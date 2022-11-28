import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateOntapVolumeConfiguration } from "./updateontapvolumeconfiguration";



export class UpdateVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: UpdateOntapVolumeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
