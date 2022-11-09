import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ProvisionByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706ProvisionByoipCidr = "GlobalAccelerator_V20180706.ProvisionByoipCidr"
}


export class ProvisionByoipCidrHeaders extends SpeakeasyBase {
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
  xAmzTarget: ProvisionByoipCidrXAmzTargetEnum;
}


export class ProvisionByoipCidrRequest extends SpeakeasyBase {
  @Metadata()
  headers: ProvisionByoipCidrHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProvisionByoipCidrRequest;
}


export class ProvisionByoipCidrResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incorrectCidrStateException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  provisionByoipCidrResponse?: shared.ProvisionByoipCidrResponse;

  @Metadata()
  statusCode: number;
}
