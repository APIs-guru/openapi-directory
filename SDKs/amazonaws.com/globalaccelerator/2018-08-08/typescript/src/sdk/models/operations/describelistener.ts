import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeListener = "GlobalAccelerator_V20180706.DescribeListener"
}


export class DescribeListenerHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeListenerXAmzTargetEnum;
}


export class DescribeListenerRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeListenerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeListenerRequest;
}


export class DescribeListenerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeListenerResponse?: shared.DescribeListenerResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  listenerNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
