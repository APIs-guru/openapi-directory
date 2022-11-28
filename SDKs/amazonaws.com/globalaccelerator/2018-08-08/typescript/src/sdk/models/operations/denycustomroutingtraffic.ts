import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DenyCustomRoutingTrafficXAmzTargetEnum {
    GlobalAcceleratorV20180706DenyCustomRoutingTraffic = "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic"
}


export class DenyCustomRoutingTrafficHeaders extends SpeakeasyBase {
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
  xAmzTarget: DenyCustomRoutingTrafficXAmzTargetEnum;
}


export class DenyCustomRoutingTrafficRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DenyCustomRoutingTrafficHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DenyCustomRoutingTrafficRequest;
}


export class DenyCustomRoutingTrafficResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
