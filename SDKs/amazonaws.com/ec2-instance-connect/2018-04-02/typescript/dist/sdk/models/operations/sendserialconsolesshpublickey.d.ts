import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendSerialConsoleSshPublicKeyXAmzTargetEnum {
    Awsec2InstanceConnectServiceSendSerialConsoleSshPublicKey = "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey"
}
export declare class SendSerialConsoleSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendSerialConsoleSshPublicKeyXAmzTargetEnum;
}
export declare class SendSerialConsoleSshPublicKeyRequest extends SpeakeasyBase {
    headers: SendSerialConsoleSshPublicKeyHeaders;
    request: shared.SendSerialConsoleSshPublicKeyRequest;
}
export declare class SendSerialConsoleSshPublicKeyResponse extends SpeakeasyBase {
    authException?: any;
    contentType: string;
    ec2InstanceNotFoundException?: any;
    ec2InstanceTypeInvalidException?: any;
    invalidArgsException?: any;
    sendSerialConsoleSshPublicKeyResponse?: shared.SendSerialConsoleSshPublicKeyResponse;
    serialConsoleAccessDisabledException?: any;
    serialConsoleSessionLimitExceededException?: any;
    serialConsoleSessionUnavailableException?: any;
    serviceException?: any;
    statusCode: number;
    throttlingException?: any;
}
