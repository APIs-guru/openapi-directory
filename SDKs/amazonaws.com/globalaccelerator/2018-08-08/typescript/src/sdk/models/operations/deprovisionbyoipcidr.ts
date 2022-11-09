import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeprovisionByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706DeprovisionByoipCidr = "GlobalAccelerator_V20180706.DeprovisionByoipCidr"
}


export class DeprovisionByoipCidrHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeprovisionByoipCidrXAmzTargetEnum;
}


export class DeprovisionByoipCidrRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeprovisionByoipCidrHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeprovisionByoipCidrRequest;
}


export class DeprovisionByoipCidrResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  byoipCidrNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deprovisionByoipCidrResponse?: shared.DeprovisionByoipCidrResponse;

  @Metadata()
  incorrectCidrStateException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
