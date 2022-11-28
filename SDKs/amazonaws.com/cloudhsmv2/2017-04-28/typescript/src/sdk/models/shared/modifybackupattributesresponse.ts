import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";



export class ModifyBackupAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Backup" })
  backup?: Backup;
}
