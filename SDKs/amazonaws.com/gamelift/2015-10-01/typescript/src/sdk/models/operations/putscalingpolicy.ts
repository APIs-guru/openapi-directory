import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutScalingPolicyXAmzTargetEnum {
    GameLiftPutScalingPolicy = "GameLift.PutScalingPolicy"
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
  request: shared.PutScalingPolicyInput;
}


export class PutScalingPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  putScalingPolicyOutput?: shared.PutScalingPolicyOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
