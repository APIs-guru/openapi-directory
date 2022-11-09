import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupPolicy } from "./backuppolicy";


export class BackupPolicyDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupPolicy" })
  backupPolicy?: BackupPolicy;
}
