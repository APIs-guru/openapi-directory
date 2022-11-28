import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CopyBackupToRegionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationRegion" })
  destinationRegion: string;

  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList?: Tag[];
}
