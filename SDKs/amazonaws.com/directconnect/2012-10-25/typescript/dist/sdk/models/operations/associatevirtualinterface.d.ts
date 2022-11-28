import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAssociateVirtualInterface = "OvertureService.AssociateVirtualInterface"
}
export declare class AssociateVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateVirtualInterfaceXAmzTargetEnum;
}
export declare class AssociateVirtualInterfaceRequest extends SpeakeasyBase {
    headers: AssociateVirtualInterfaceHeaders;
    request: shared.AssociateVirtualInterfaceRequest;
}
export declare class AssociateVirtualInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
    virtualInterface?: shared.VirtualInterface;
}
