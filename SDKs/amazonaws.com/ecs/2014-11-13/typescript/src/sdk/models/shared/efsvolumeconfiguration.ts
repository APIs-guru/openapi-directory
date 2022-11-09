import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EfsAuthorizationConfig } from "./efsauthorizationconfig";
import { EfsTransitEncryptionEnum } from "./efstransitencryptionenum";


// EfsVolumeConfiguration
/** 
 * This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
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
