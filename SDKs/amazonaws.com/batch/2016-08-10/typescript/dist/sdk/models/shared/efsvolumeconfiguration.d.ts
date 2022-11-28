import { SpeakeasyBase } from "../../../internal/utils";
import { EfsAuthorizationConfig } from "./efsauthorizationconfig";
import { EfsTransitEncryptionEnum } from "./efstransitencryptionenum";
/**
 * This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Batch User Guide</i>.
**/
export declare class EfsVolumeConfiguration extends SpeakeasyBase {
    authorizationConfig?: EfsAuthorizationConfig;
    fileSystemId: string;
    rootDirectory?: string;
    transitEncryption?: EfsTransitEncryptionEnum;
    transitEncryptionPort?: number;
}
