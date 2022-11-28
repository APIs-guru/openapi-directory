import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConfirmTransitVirtualInterfaceXAmzTargetEnum {
    OvertureServiceConfirmTransitVirtualInterface = "OvertureService.ConfirmTransitVirtualInterface"
}
export declare class ConfirmTransitVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmTransitVirtualInterfaceXAmzTargetEnum;
}
export declare class ConfirmTransitVirtualInterfaceRequest extends SpeakeasyBase {
    headers: ConfirmTransitVirtualInterfaceHeaders;
    request: shared.ConfirmTransitVirtualInterfaceRequest;
}
export declare class ConfirmTransitVirtualInterfaceResponse extends SpeakeasyBase {
    confirmTransitVirtualInterfaceResponse?: shared.ConfirmTransitVirtualInterfaceResponse;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
