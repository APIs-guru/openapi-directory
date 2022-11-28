import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutBackupPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" })
  fileSystemId: string;
}


export class PutBackupPolicyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// PutBackupPolicyRequestBodyBackupPolicy
/** 
 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
**/
export class PutBackupPolicyRequestBodyBackupPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: shared.StatusEnum;
}


export class PutBackupPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupPolicy" })
  backupPolicy: PutBackupPolicyRequestBodyBackupPolicy;
}


export class PutBackupPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutBackupPolicyPathParams;

  @SpeakeasyMetadata()
  headers: PutBackupPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutBackupPolicyRequestBody;
}


export class PutBackupPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  backupPolicyDescription?: shared.BackupPolicyDescription;

  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileSystemNotFound?: any;

  @SpeakeasyMetadata()
  incorrectFileSystemLifeCycleState?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
