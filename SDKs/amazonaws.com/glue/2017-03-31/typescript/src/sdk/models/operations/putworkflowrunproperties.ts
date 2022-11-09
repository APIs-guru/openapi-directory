import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutWorkflowRunPropertiesXAmzTargetEnum {
    AwsGluePutWorkflowRunProperties = "AWSGlue.PutWorkflowRunProperties"
}


export class PutWorkflowRunPropertiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutWorkflowRunPropertiesXAmzTargetEnum;
}


export class PutWorkflowRunPropertiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutWorkflowRunPropertiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutWorkflowRunPropertiesRequest;
}


export class PutWorkflowRunPropertiesResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  putWorkflowRunPropertiesResponse?: Map<string, any>;

  @Metadata()
  resourceNumberLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
