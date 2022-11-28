import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateOntapVolumeConfiguration } from "./createontapvolumeconfiguration";
import { Tag } from "./tag";
import { VolumeTypeEnum } from "./volumetypeenum";



export class CreateVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: CreateOntapVolumeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VolumeType" })
  volumeType: VolumeTypeEnum;
}
