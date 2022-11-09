import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateCustomRoutingListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingListener = "GlobalAccelerator_V20180706.UpdateCustomRoutingListener"
}


export class UpdateCustomRoutingListenerHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCustomRoutingListenerXAmzTargetEnum;
}


export class UpdateCustomRoutingListenerRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCustomRoutingListenerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomRoutingListenerRequest;
}


export class UpdateCustomRoutingListenerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidPortRangeException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listenerNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCustomRoutingListenerResponse?: shared.UpdateCustomRoutingListenerResponse;
}
