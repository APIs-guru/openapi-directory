import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributes = "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes"
}


export class DescribeCustomRoutingAcceleratorAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum;
}


export class DescribeCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCustomRoutingAcceleratorAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCustomRoutingAcceleratorAttributesRequest;
}


export class DescribeCustomRoutingAcceleratorAttributesResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeCustomRoutingAcceleratorAttributesResponse?: shared.DescribeCustomRoutingAcceleratorAttributesResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
