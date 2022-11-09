import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes = "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes"
}


export class UpdateCustomRoutingAcceleratorAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum;
}


export class UpdateCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCustomRoutingAcceleratorAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomRoutingAcceleratorAttributesRequest;
}


export class UpdateCustomRoutingAcceleratorAttributesResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCustomRoutingAcceleratorAttributesResponse?: shared.UpdateCustomRoutingAcceleratorAttributesResponse;
}
