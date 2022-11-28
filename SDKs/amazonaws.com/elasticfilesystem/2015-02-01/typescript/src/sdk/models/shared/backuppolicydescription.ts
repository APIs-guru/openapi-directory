import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupPolicy } from "./backuppolicy";



export class BackupPolicyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupPolicy" })
  backupPolicy?: BackupPolicy;
}
