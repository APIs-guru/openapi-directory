import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterScalableTargetXAmzTargetEnum {
    AnyScaleFrontendServiceDeregisterScalableTarget = "AnyScaleFrontendService.DeregisterScalableTarget"
}


export class DeregisterScalableTargetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterScalableTargetXAmzTargetEnum;
}


export class DeregisterScalableTargetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterScalableTargetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterScalableTargetRequest;
}


export class DeregisterScalableTargetResponse extends SpeakeasyBase {
  @Metadata()
  concurrentUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deregisterScalableTargetResponse?: Map<string, any>;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  objectNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
