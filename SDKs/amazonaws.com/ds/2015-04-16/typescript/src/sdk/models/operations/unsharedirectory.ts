import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UnshareDirectoryXAmzTargetEnum {
    DirectoryService20150416UnshareDirectory = "DirectoryService_20150416.UnshareDirectory"
}


export class UnshareDirectoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: UnshareDirectoryXAmzTargetEnum;
}


export class UnshareDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: UnshareDirectoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UnshareDirectoryRequest;
}


export class UnshareDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryNotSharedException?: any;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidTargetException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unshareDirectoryResult?: shared.UnshareDirectoryResult;
}
