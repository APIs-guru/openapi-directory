import { SpeakeasyBase } from "../../../internal/utils";
import { EfsAuthorizationConfig } from "./efsauthorizationconfig";
import { EfsTransitEncryptionEnum } from "./efstransitencryptionenum";
/**
 * This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export declare class EfsVolumeConfiguration extends SpeakeasyBase {
    authorizationConfig?: EfsAuthorizationConfig;
    fileSystemId: string;
    rootDirectory?: string;
    transitEncryption?: EfsTransitEncryptionEnum;
    transitEncryptionPort?: number;
}
