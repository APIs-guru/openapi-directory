import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeletePartitionIndexXAmzTargetEnum {
    AwsGlueDeletePartitionIndex = "AWSGlue.DeletePartitionIndex"
}


export class DeletePartitionIndexHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeletePartitionIndexXAmzTargetEnum;
}


export class DeletePartitionIndexRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeletePartitionIndexHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeletePartitionIndexRequest;
}


export class DeletePartitionIndexResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deletePartitionIndexResponse?: Map<string, any>;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  glueEncryptionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
