import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeleteVolumeOntapConfiguration } from "./deletevolumeontapconfiguration";


export class DeleteVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: DeleteVolumeOntapConfiguration;

  @Metadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
