import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCustomRoutingEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroup = "GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup"
}


export class DescribeCustomRoutingEndpointGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCustomRoutingEndpointGroupXAmzTargetEnum;
}


export class DescribeCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCustomRoutingEndpointGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCustomRoutingEndpointGroupRequest;
}


export class DescribeCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeCustomRoutingEndpointGroupResponse?: shared.DescribeCustomRoutingEndpointGroupResponse;

  @Metadata()
  endpointGroupNotFoundException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
