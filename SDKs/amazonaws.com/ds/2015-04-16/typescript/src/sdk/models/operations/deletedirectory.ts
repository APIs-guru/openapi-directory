import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteDirectoryXAmzTargetEnum {
    DirectoryService20150416DeleteDirectory = "DirectoryService_20150416.DeleteDirectory"
}


export class DeleteDirectoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteDirectoryXAmzTargetEnum;
}


export class DeleteDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteDirectoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteDirectoryRequest;
}


export class DeleteDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteDirectoryResult?: shared.DeleteDirectoryResult;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
