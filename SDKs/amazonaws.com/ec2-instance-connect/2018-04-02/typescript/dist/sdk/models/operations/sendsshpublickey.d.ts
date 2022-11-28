import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendSshPublicKeyXAmzTargetEnum {
    Awsec2InstanceConnectServiceSendSshPublicKey = "AWSEC2InstanceConnectService.SendSSHPublicKey"
}
export declare class SendSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendSshPublicKeyXAmzTargetEnum;
}
export declare class SendSshPublicKeyRequest extends SpeakeasyBase {
    headers: SendSshPublicKeyHeaders;
    request: shared.SendSshPublicKeyRequest;
}
export declare class SendSshPublicKeyResponse extends SpeakeasyBase {
    authException?: any;
    contentType: string;
    ec2InstanceNotFoundException?: any;
    invalidArgsException?: any;
    sendSshPublicKeyResponse?: shared.SendSshPublicKeyResponse;
    serviceException?: any;
    statusCode: number;
    throttlingException?: any;
}
