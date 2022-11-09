import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddCustomRoutingEndpointsXAmzTargetEnum {
    GlobalAcceleratorV20180706AddCustomRoutingEndpoints = "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints"
}


export class AddCustomRoutingEndpointsHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddCustomRoutingEndpointsXAmzTargetEnum;
}


export class AddCustomRoutingEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddCustomRoutingEndpointsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddCustomRoutingEndpointsRequest;
}


export class AddCustomRoutingEndpointsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  addCustomRoutingEndpointsResponse?: shared.AddCustomRoutingEndpointsResponse;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  endpointAlreadyExistsException?: any;

  @Metadata()
  endpointGroupNotFoundException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
