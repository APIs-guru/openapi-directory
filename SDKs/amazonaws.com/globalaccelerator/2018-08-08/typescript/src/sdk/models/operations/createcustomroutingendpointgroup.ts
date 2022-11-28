import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateCustomRoutingEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup = "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup"
}


export class CreateCustomRoutingEndpointGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCustomRoutingEndpointGroupXAmzTargetEnum;
}


export class CreateCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCustomRoutingEndpointGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateCustomRoutingEndpointGroupRequest;
}


export class CreateCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceleratorNotFoundException?: any;

  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCustomRoutingEndpointGroupResponse?: shared.CreateCustomRoutingEndpointGroupResponse;

  @SpeakeasyMetadata()
  endpointGroupAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  invalidPortRangeException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  listenerNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
