import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateFileSystemXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateFileSystem = "AWSSimbaAPIService_v20180301.CreateFileSystem"
}


export class CreateFileSystemHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateFileSystemXAmzTargetEnum;
}


export class CreateFileSystemRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFileSystemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateFileSystemRequest;
}


export class CreateFileSystemResponse extends SpeakeasyBase {
  @Metadata()
  activeDirectoryError?: any;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createFileSystemResponse?: shared.CreateFileSystemResponse;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidExportPath?: any;

  @Metadata()
  invalidImportPath?: any;

  @Metadata()
  invalidNetworkSettings?: any;

  @Metadata()
  invalidPerUnitStorageThroughput?: any;

  @Metadata()
  missingFileSystemConfiguration?: any;

  @Metadata()
  serviceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
