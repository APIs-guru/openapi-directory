import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateUserDefinedFunctionXAmzTargetEnum {
    AwsGlueCreateUserDefinedFunction = "AWSGlue.CreateUserDefinedFunction"
}


export class CreateUserDefinedFunctionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateUserDefinedFunctionXAmzTargetEnum;
}


export class CreateUserDefinedFunctionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateUserDefinedFunctionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateUserDefinedFunctionRequest;
}


export class CreateUserDefinedFunctionResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createUserDefinedFunctionResponse?: Map<string, any>;

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
  resourceNumberLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
