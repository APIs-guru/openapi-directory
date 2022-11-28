import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes = "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes"
}


export class UpdateCustomRoutingAcceleratorAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum;
}


export class UpdateCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateCustomRoutingAcceleratorAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomRoutingAcceleratorAttributesRequest;
}


export class UpdateCustomRoutingAcceleratorAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceleratorNotFoundException?: any;

  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCustomRoutingAcceleratorAttributesResponse?: shared.UpdateCustomRoutingAcceleratorAttributesResponse;
}
