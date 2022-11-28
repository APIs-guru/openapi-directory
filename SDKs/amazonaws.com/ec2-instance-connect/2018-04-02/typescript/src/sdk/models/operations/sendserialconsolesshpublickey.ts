import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SendSerialConsoleSshPublicKeyXAmzTargetEnum {
    Awsec2InstanceConnectServiceSendSerialConsoleSshPublicKey = "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey"
}


export class SendSerialConsoleSshPublicKeyHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendSerialConsoleSshPublicKeyXAmzTargetEnum;
}


export class SendSerialConsoleSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendSerialConsoleSshPublicKeyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SendSerialConsoleSshPublicKeyRequest;
}


export class SendSerialConsoleSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ec2InstanceNotFoundException?: any;

  @SpeakeasyMetadata()
  ec2InstanceTypeInvalidException?: any;

  @SpeakeasyMetadata()
  invalidArgsException?: any;

  @SpeakeasyMetadata()
  sendSerialConsoleSshPublicKeyResponse?: shared.SendSerialConsoleSshPublicKeyResponse;

  @SpeakeasyMetadata()
  serialConsoleAccessDisabledException?: any;

  @SpeakeasyMetadata()
  serialConsoleSessionLimitExceededException?: any;

  @SpeakeasyMetadata()
  serialConsoleSessionUnavailableException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
