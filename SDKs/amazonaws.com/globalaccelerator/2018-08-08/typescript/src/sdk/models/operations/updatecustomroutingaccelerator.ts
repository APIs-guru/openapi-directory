import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingAccelerator = "GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator"
}


export class UpdateCustomRoutingAcceleratorHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCustomRoutingAcceleratorXAmzTargetEnum;
}


export class UpdateCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCustomRoutingAcceleratorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomRoutingAcceleratorRequest;
}


export class UpdateCustomRoutingAcceleratorResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCustomRoutingAcceleratorResponse?: shared.UpdateCustomRoutingAcceleratorResponse;
}
