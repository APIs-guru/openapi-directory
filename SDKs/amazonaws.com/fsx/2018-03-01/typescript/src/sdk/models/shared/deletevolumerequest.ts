import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteVolumeOntapConfiguration } from "./deletevolumeontapconfiguration";



export class DeleteVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: DeleteVolumeOntapConfiguration;

  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
