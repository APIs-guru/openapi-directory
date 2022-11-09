import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EfsAuthorizationConfig } from "./efsauthorizationconfig";
import { EfsTransitEncryptionEnum } from "./efstransitencryptionenum";


// EfsVolumeConfiguration
/** 
 * This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Batch User Guide</i>.
**/
export class EfsVolumeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationConfig" })
  authorizationConfig?: EfsAuthorizationConfig;

  @Metadata({ data: "json, name=fileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=rootDirectory" })
  rootDirectory?: string;

  @Metadata({ data: "json, name=transitEncryption" })
  transitEncryption?: EfsTransitEncryptionEnum;

  @Metadata({ data: "json, name=transitEncryptionPort" })
  transitEncryptionPort?: number;
}
