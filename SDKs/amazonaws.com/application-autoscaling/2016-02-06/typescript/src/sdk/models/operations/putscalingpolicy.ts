import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutScalingPolicyXAmzTargetEnum {
    AnyScaleFrontendServicePutScalingPolicy = "AnyScaleFrontendService.PutScalingPolicy"
}


export class PutScalingPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutScalingPolicyXAmzTargetEnum;
}


export class PutScalingPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutScalingPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutScalingPolicyRequest;
}


export class PutScalingPolicyResponse extends SpeakeasyBase {
  @Metadata()
  concurrentUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  failedResourceAccessException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  objectNotFoundException?: any;

  @Metadata()
  putScalingPolicyResponse?: shared.PutScalingPolicyResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
