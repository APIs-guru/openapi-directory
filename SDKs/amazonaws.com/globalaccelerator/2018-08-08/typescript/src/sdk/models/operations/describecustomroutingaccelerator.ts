import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingAccelerator = "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator"
}


export class DescribeCustomRoutingAcceleratorHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCustomRoutingAcceleratorXAmzTargetEnum;
}


export class DescribeCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCustomRoutingAcceleratorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCustomRoutingAcceleratorRequest;
}


export class DescribeCustomRoutingAcceleratorResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeCustomRoutingAcceleratorResponse?: shared.DescribeCustomRoutingAcceleratorResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
