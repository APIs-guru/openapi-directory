import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EfsAuthorizationConfig } from "./efsauthorizationconfig";
import { EfsTransitEncryptionEnum } from "./efstransitencryptionenum";



// EfsVolumeConfiguration
/** 
 * This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export class EfsVolumeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationConfig" })
  authorizationConfig?: EfsAuthorizationConfig;

  @SpeakeasyMetadata({ data: "json, name=fileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=rootDirectory" })
  rootDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=transitEncryption" })
  transitEncryption?: EfsTransitEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=transitEncryptionPort" })
  transitEncryptionPort?: number;
}
