import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateFileSystemXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateFileSystem = "AWSSimbaAPIService_v20180301.CreateFileSystem"
}


export class CreateFileSystemHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateFileSystemXAmzTargetEnum;
}


export class CreateFileSystemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFileSystemHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateFileSystemRequest;
}


export class CreateFileSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeDirectoryError?: any;

  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createFileSystemResponse?: shared.CreateFileSystemResponse;

  @SpeakeasyMetadata()
  incompatibleParameterError?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidExportPath?: any;

  @SpeakeasyMetadata()
  invalidImportPath?: any;

  @SpeakeasyMetadata()
  invalidNetworkSettings?: any;

  @SpeakeasyMetadata()
  invalidPerUnitStorageThroughput?: any;

  @SpeakeasyMetadata()
  missingFileSystemConfiguration?: any;

  @SpeakeasyMetadata()
  serviceLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
