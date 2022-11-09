import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelDataRepositoryTaskXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CancelDataRepositoryTask = "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask"
}


export class CancelDataRepositoryTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelDataRepositoryTaskXAmzTargetEnum;
}


export class CancelDataRepositoryTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelDataRepositoryTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelDataRepositoryTaskRequest;
}


export class CancelDataRepositoryTaskResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  cancelDataRepositoryTaskResponse?: shared.CancelDataRepositoryTaskResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  dataRepositoryTaskEnded?: any;

  @Metadata()
  dataRepositoryTaskNotFound?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperation?: any;
}
