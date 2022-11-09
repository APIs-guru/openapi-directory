import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationBackup } from "./destinationbackup";


export class CopyBackupToRegionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationBackup" })
  destinationBackup?: DestinationBackup;
}
