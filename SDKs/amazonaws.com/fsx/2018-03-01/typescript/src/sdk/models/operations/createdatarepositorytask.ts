import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDataRepositoryTaskXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateDataRepositoryTask = "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask"
}


export class CreateDataRepositoryTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDataRepositoryTaskXAmzTargetEnum;
}


export class CreateDataRepositoryTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDataRepositoryTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDataRepositoryTaskRequest;
}


export class CreateDataRepositoryTaskResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDataRepositoryTaskResponse?: shared.CreateDataRepositoryTaskResponse;

  @Metadata()
  dataRepositoryTaskExecuting?: any;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  serviceLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperation?: any;
}
