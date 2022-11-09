import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteSnapshotXAmzTargetEnum {
    DirectoryService20150416DeleteSnapshot = "DirectoryService_20150416.DeleteSnapshot"
}


export class DeleteSnapshotHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeleteSnapshotXAmzTargetEnum;
}


export class DeleteSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteSnapshotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteSnapshotRequest;
}


export class DeleteSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteSnapshotResult?: shared.DeleteSnapshotResult;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
