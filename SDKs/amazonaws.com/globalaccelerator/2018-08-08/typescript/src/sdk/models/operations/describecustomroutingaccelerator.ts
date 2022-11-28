import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingAccelerator = "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator"
}


export class DescribeCustomRoutingAcceleratorHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCustomRoutingAcceleratorXAmzTargetEnum;
}


export class DescribeCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeCustomRoutingAcceleratorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCustomRoutingAcceleratorRequest;
}


export class DescribeCustomRoutingAcceleratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceleratorNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeCustomRoutingAcceleratorResponse?: shared.DescribeCustomRoutingAcceleratorResponse;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
