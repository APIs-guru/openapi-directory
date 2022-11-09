import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SendSerialConsoleSshPublicKeyXAmzTargetEnum {
    Awsec2InstanceConnectServiceSendSerialConsoleSshPublicKey = "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey"
}


export class SendSerialConsoleSshPublicKeyHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendSerialConsoleSshPublicKeyXAmzTargetEnum;
}


export class SendSerialConsoleSshPublicKeyRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendSerialConsoleSshPublicKeyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendSerialConsoleSshPublicKeyRequest;
}


export class SendSerialConsoleSshPublicKeyResponse extends SpeakeasyBase {
  @Metadata()
  authException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  ec2InstanceNotFoundException?: any;

  @Metadata()
  ec2InstanceTypeInvalidException?: any;

  @Metadata()
  invalidArgsException?: any;

  @Metadata()
  sendSerialConsoleSshPublicKeyResponse?: shared.SendSerialConsoleSshPublicKeyResponse;

  @Metadata()
  serialConsoleAccessDisabledException?: any;

  @Metadata()
  serialConsoleSessionLimitExceededException?: any;

  @Metadata()
  serialConsoleSessionUnavailableException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
