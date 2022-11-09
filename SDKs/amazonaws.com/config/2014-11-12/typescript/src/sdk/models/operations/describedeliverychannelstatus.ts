import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDeliveryChannelStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeDeliveryChannelStatus = "StarlingDoveService.DescribeDeliveryChannelStatus"
}


export class DescribeDeliveryChannelStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDeliveryChannelStatusXAmzTargetEnum;
}


export class DescribeDeliveryChannelStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDeliveryChannelStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDeliveryChannelStatusRequest;
}


export class DescribeDeliveryChannelStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDeliveryChannelStatusResponse?: shared.DescribeDeliveryChannelStatusResponse;

  @Metadata()
  noSuchDeliveryChannelException?: any;

  @Metadata()
  statusCode: number;
}
