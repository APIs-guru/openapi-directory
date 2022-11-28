import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";



export class CopyBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Backup" })
  backup?: Backup;
}
