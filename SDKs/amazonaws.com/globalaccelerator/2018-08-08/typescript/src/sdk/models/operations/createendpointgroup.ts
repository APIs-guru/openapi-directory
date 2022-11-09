import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateEndpointGroup = "GlobalAccelerator_V20180706.CreateEndpointGroup"
}


export class CreateEndpointGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateEndpointGroupXAmzTargetEnum;
}


export class CreateEndpointGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEndpointGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateEndpointGroupRequest;
}


export class CreateEndpointGroupResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createEndpointGroupResponse?: shared.CreateEndpointGroupResponse;

  @Metadata()
  endpointGroupAlreadyExistsException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listenerNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
