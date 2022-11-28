import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeDeliveryChannelStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeDeliveryChannelStatus = "StarlingDoveService.DescribeDeliveryChannelStatus"
}


export class DescribeDeliveryChannelStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDeliveryChannelStatusXAmzTargetEnum;
}


export class DescribeDeliveryChannelStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeDeliveryChannelStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDeliveryChannelStatusRequest;
}


export class DescribeDeliveryChannelStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeDeliveryChannelStatusResponse?: shared.DescribeDeliveryChannelStatusResponse;

  @SpeakeasyMetadata()
  noSuchDeliveryChannelException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
