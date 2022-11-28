import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConfirmPublicVirtualInterfaceXAmzTargetEnum {
    OvertureServiceConfirmPublicVirtualInterface = "OvertureService.ConfirmPublicVirtualInterface"
}
export declare class ConfirmPublicVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmPublicVirtualInterfaceXAmzTargetEnum;
}
export declare class ConfirmPublicVirtualInterfaceRequest extends SpeakeasyBase {
    headers: ConfirmPublicVirtualInterfaceHeaders;
    request: shared.ConfirmPublicVirtualInterfaceRequest;
}
export declare class ConfirmPublicVirtualInterfaceResponse extends SpeakeasyBase {
    confirmPublicVirtualInterfaceResponse?: shared.ConfirmPublicVirtualInterfaceResponse;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
