import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConfirmPrivateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceConfirmPrivateVirtualInterface = "OvertureService.ConfirmPrivateVirtualInterface"
}
export declare class ConfirmPrivateVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmPrivateVirtualInterfaceXAmzTargetEnum;
}
export declare class ConfirmPrivateVirtualInterfaceRequest extends SpeakeasyBase {
    headers: ConfirmPrivateVirtualInterfaceHeaders;
    request: shared.ConfirmPrivateVirtualInterfaceRequest;
}
export declare class ConfirmPrivateVirtualInterfaceResponse extends SpeakeasyBase {
    confirmPrivateVirtualInterfaceResponse?: shared.ConfirmPrivateVirtualInterfaceResponse;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
