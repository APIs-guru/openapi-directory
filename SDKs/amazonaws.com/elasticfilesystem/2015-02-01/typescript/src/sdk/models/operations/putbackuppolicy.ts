import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutBackupPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" })
  fileSystemId: string;
}


export class PutBackupPolicyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// PutBackupPolicyRequestBodyBackupPolicy
/** 
 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
**/
export class PutBackupPolicyRequestBodyBackupPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: shared.StatusEnum;
}


export class PutBackupPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupPolicy" })
  backupPolicy: PutBackupPolicyRequestBodyBackupPolicy;
}


export class PutBackupPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutBackupPolicyPathParams;

  @Metadata()
  headers: PutBackupPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutBackupPolicyRequestBody;
}


export class PutBackupPolicyResponse extends SpeakeasyBase {
  @Metadata()
  backupPolicyDescription?: shared.BackupPolicyDescription;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incorrectFileSystemLifeCycleState?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
