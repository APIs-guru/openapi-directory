import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SendSshPublicKeyXAmzTargetEnum {
    Awsec2InstanceConnectServiceSendSshPublicKey = "AWSEC2InstanceConnectService.SendSSHPublicKey"
}


export class SendSshPublicKeyHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendSshPublicKeyXAmzTargetEnum;
}


export class SendSshPublicKeyRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendSshPublicKeyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendSshPublicKeyRequest;
}


export class SendSshPublicKeyResponse extends SpeakeasyBase {
  @Metadata()
  authException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  ec2InstanceNotFoundException?: any;

  @Metadata()
  invalidArgsException?: any;

  @Metadata()
  sendSshPublicKeyResponse?: shared.SendSshPublicKeyResponse;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
