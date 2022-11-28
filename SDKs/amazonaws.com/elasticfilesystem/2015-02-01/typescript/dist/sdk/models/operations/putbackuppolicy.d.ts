import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutBackupPolicyPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class PutBackupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
**/
export declare class PutBackupPolicyRequestBodyBackupPolicy extends SpeakeasyBase {
    status?: shared.StatusEnum;
}
export declare class PutBackupPolicyRequestBody extends SpeakeasyBase {
    backupPolicy: PutBackupPolicyRequestBodyBackupPolicy;
}
export declare class PutBackupPolicyRequest extends SpeakeasyBase {
    pathParams: PutBackupPolicyPathParams;
    headers: PutBackupPolicyHeaders;
    request: PutBackupPolicyRequestBody;
}
export declare class PutBackupPolicyResponse extends SpeakeasyBase {
    backupPolicyDescription?: shared.BackupPolicyDescription;
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    incorrectFileSystemLifeCycleState?: any;
    internalServerError?: any;
    statusCode: number;
    validationException?: any;
}
