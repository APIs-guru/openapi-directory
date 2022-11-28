import { SpeakeasyBase } from "../../../internal/utils";
import { AtimeEnum } from "./atimeenum";
import { GidEnum } from "./gidenum";
import { LogLevelEnum } from "./loglevelenum";
import { MtimeEnum } from "./mtimeenum";
import { OverwriteModeEnum } from "./overwritemodeenum";
import { PosixPermissionsEnum } from "./posixpermissionsenum";
import { PreserveDeletedFilesEnum } from "./preservedeletedfilesenum";
import { PreserveDevicesEnum } from "./preservedevicesenum";
import { SmbSecurityDescriptorCopyFlagsEnum } from "./smbsecuritydescriptorcopyflagsenum";
import { TaskQueueingEnum } from "./taskqueueingenum";
import { TransferModeEnum } from "./transfermodeenum";
import { UidEnum } from "./uidenum";
import { VerifyModeEnum } from "./verifymodeenum";
/**
 * <p>Represents the options that are available to control the behavior of a <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
**/
export declare class Options extends SpeakeasyBase {
    atime?: AtimeEnum;
    bytesPerSecond?: number;
    gid?: GidEnum;
    logLevel?: LogLevelEnum;
    mtime?: MtimeEnum;
    overwriteMode?: OverwriteModeEnum;
    posixPermissions?: PosixPermissionsEnum;
    preserveDeletedFiles?: PreserveDeletedFilesEnum;
    preserveDevices?: PreserveDevicesEnum;
    securityDescriptorCopyFlags?: SmbSecurityDescriptorCopyFlagsEnum;
    taskQueueing?: TaskQueueingEnum;
    transferMode?: TransferModeEnum;
    uid?: UidEnum;
    verifyMode?: VerifyModeEnum;
}
