import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ProvisionByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706ProvisionByoipCidr = "GlobalAccelerator_V20180706.ProvisionByoipCidr"
}


export class ProvisionByoipCidrHeaders extends SpeakeasyBase {
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
  xAmzTarget: ProvisionByoipCidrXAmzTargetEnum;
}


export class ProvisionByoipCidrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ProvisionByoipCidrHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProvisionByoipCidrRequest;
}


export class ProvisionByoipCidrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incorrectCidrStateException?: any;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  provisionByoipCidrResponse?: shared.ProvisionByoipCidrResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
