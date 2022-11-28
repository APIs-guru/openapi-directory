import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SendSshPublicKeyXAmzTargetEnum {
    Awsec2InstanceConnectServiceSendSshPublicKey = "AWSEC2InstanceConnectService.SendSSHPublicKey"
}


export class SendSshPublicKeyHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendSshPublicKeyXAmzTargetEnum;
}


export class SendSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendSshPublicKeyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SendSshPublicKeyRequest;
}


export class SendSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ec2InstanceNotFoundException?: any;

  @SpeakeasyMetadata()
  invalidArgsException?: any;

  @SpeakeasyMetadata()
  sendSshPublicKeyResponse?: shared.SendSshPublicKeyResponse;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
