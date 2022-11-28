import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";



export class RestoreBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Backup" })
  backup?: Backup;
}
