import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeEndpointGroup = "GlobalAccelerator_V20180706.DescribeEndpointGroup"
}


export class DescribeEndpointGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEndpointGroupXAmzTargetEnum;
}


export class DescribeEndpointGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeEndpointGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEndpointGroupRequest;
}


export class DescribeEndpointGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeEndpointGroupResponse?: shared.DescribeEndpointGroupResponse;

  @SpeakeasyMetadata()
  endpointGroupNotFoundException?: any;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
