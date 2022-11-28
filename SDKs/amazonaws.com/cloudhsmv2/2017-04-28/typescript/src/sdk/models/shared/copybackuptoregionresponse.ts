import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationBackup } from "./destinationbackup";



export class CopyBackupToRegionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationBackup" })
  destinationBackup?: DestinationBackup;
}
