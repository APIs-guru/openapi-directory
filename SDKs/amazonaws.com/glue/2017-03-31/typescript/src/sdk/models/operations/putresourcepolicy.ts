import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutResourcePolicyXAmzTargetEnum {
    AwsGluePutResourcePolicy = "AWSGlue.PutResourcePolicy"
}


export class PutResourcePolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutResourcePolicyXAmzTargetEnum;
}


export class PutResourcePolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutResourcePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutResourcePolicyRequest;
}


export class PutResourcePolicyResponse extends SpeakeasyBase {
  @Metadata()
  conditionCheckFailureException?: any;

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
  putResourcePolicyResponse?: shared.PutResourcePolicyResponse;

  @Metadata()
  statusCode: number;
}
