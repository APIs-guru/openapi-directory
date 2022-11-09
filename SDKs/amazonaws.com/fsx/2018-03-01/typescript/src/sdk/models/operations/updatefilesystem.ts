import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateFileSystemXAmzTargetEnum {
    AwsSimbaApiServiceV20180301UpdateFileSystem = "AWSSimbaAPIService_v20180301.UpdateFileSystem"
}


export class UpdateFileSystemHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateFileSystemXAmzTargetEnum;
}


export class UpdateFileSystemRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateFileSystemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateFileSystemRequest;
}


export class UpdateFileSystemResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  missingFileSystemConfiguration?: any;

  @Metadata()
  serviceLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperation?: any;

  @Metadata()
  updateFileSystemResponse?: shared.UpdateFileSystemResponse;
}
