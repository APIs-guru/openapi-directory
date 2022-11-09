import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteListener = "GlobalAccelerator_V20180706.DeleteListener"
}


export class DeleteListenerHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteListenerXAmzTargetEnum;
}


export class DeleteListenerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteListenerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteListenerRequest;
}


export class DeleteListenerResponse extends SpeakeasyBase {
  @Metadata()
  associatedEndpointGroupFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  listenerNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
