import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateOntapVolumeConfiguration } from "./updateontapvolumeconfiguration";


export class UpdateVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: UpdateOntapVolumeConfiguration;

  @Metadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
