import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdvertiseByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706AdvertiseByoipCidr = "GlobalAccelerator_V20180706.AdvertiseByoipCidr"
}


export class AdvertiseByoipCidrHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdvertiseByoipCidrXAmzTargetEnum;
}


export class AdvertiseByoipCidrRequest extends SpeakeasyBase {
  @Metadata()
  headers: AdvertiseByoipCidrHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdvertiseByoipCidrRequest;
}


export class AdvertiseByoipCidrResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  advertiseByoipCidrResponse?: shared.AdvertiseByoipCidrResponse;

  @Metadata()
  byoipCidrNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incorrectCidrStateException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
