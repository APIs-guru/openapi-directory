import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateOntapVolumeConfiguration } from "./createontapvolumeconfiguration";
import { Tag } from "./tag";



export class CreateVolumeFromBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: CreateOntapVolumeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
