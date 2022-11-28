import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AdvertiseByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706AdvertiseByoipCidr = "GlobalAccelerator_V20180706.AdvertiseByoipCidr"
}


export class AdvertiseByoipCidrHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdvertiseByoipCidrXAmzTargetEnum;
}


export class AdvertiseByoipCidrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AdvertiseByoipCidrHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AdvertiseByoipCidrRequest;
}


export class AdvertiseByoipCidrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  advertiseByoipCidrResponse?: shared.AdvertiseByoipCidrResponse;

  @SpeakeasyMetadata()
  byoipCidrNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incorrectCidrStateException?: any;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
