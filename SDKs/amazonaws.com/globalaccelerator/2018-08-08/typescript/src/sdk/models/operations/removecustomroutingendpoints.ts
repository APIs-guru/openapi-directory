import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RemoveCustomRoutingEndpointsXAmzTargetEnum {
    GlobalAcceleratorV20180706RemoveCustomRoutingEndpoints = "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints"
}


export class RemoveCustomRoutingEndpointsHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveCustomRoutingEndpointsXAmzTargetEnum;
}


export class RemoveCustomRoutingEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveCustomRoutingEndpointsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RemoveCustomRoutingEndpointsRequest;
}


export class RemoveCustomRoutingEndpointsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  endpointGroupNotFoundException?: any;

  @Metadata()
  endpointNotFoundException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
