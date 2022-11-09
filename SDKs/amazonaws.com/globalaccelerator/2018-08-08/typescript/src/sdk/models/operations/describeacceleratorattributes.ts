import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeAcceleratorAttributes = "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes"
}


export class DescribeAcceleratorAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAcceleratorAttributesXAmzTargetEnum;
}


export class DescribeAcceleratorAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAcceleratorAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAcceleratorAttributesRequest;
}


export class DescribeAcceleratorAttributesResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAcceleratorAttributesResponse?: shared.DescribeAcceleratorAttributesResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
