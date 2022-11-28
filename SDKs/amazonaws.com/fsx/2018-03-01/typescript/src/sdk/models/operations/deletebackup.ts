import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DeleteBackup = "AWSSimbaAPIService_v20180301.DeleteBackup"
}


export class DeleteBackupHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeleteBackupXAmzTargetEnum;
}


export class DeleteBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteBackupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteBackupRequest;
}


export class DeleteBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  backupBeingCopied?: any;

  @SpeakeasyMetadata()
  backupInProgress?: any;

  @SpeakeasyMetadata()
  backupNotFound?: any;

  @SpeakeasyMetadata()
  backupRestoring?: any;

  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteBackupResponse?: shared.DeleteBackupResponse;

  @SpeakeasyMetadata()
  incompatibleParameterError?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
