import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateJobXAmzTargetEnum {
    AwsGlueCreateJob = "AWSGlue.CreateJob"
}


export class CreateJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateJobXAmzTargetEnum;
}


export class CreateJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateJobRequest;
}


export class CreateJobResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createJobResponse?: shared.CreateJobResponse;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  resourceNumberLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
