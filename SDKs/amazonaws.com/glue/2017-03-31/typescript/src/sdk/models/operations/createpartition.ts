import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreatePartitionXAmzTargetEnum {
    AwsGlueCreatePartition = "AWSGlue.CreatePartition"
}


export class CreatePartitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePartitionXAmzTargetEnum;
}


export class CreatePartitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePartitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreatePartitionRequest;
}


export class CreatePartitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alreadyExistsException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPartitionResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  entityNotFoundException?: any;

  @SpeakeasyMetadata()
  glueEncryptionException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  operationTimeoutException?: any;

  @SpeakeasyMetadata()
  resourceNumberLimitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
