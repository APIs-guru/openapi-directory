import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RestoreFromSnapshotXAmzTargetEnum {
    DirectoryService20150416RestoreFromSnapshot = "DirectoryService_20150416.RestoreFromSnapshot"
}


export class RestoreFromSnapshotHeaders extends SpeakeasyBase {
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
  xAmzTarget: RestoreFromSnapshotXAmzTargetEnum;
}


export class RestoreFromSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  headers: RestoreFromSnapshotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RestoreFromSnapshotRequest;
}


export class RestoreFromSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  restoreFromSnapshotResult?: Map<string, any>;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
