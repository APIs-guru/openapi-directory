import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCustomRoutingEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup = "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup"
}


export class CreateCustomRoutingEndpointGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCustomRoutingEndpointGroupXAmzTargetEnum;
}


export class CreateCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCustomRoutingEndpointGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCustomRoutingEndpointGroupRequest;
}


export class CreateCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCustomRoutingEndpointGroupResponse?: shared.CreateCustomRoutingEndpointGroupResponse;

  @Metadata()
  endpointGroupAlreadyExistsException?: any;

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
}
