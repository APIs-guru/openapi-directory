import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateVirtualInterfaceAttributesXAmzTargetEnum {
    OvertureServiceUpdateVirtualInterfaceAttributes = "OvertureService.UpdateVirtualInterfaceAttributes"
}
export declare class UpdateVirtualInterfaceAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVirtualInterfaceAttributesXAmzTargetEnum;
}
export declare class UpdateVirtualInterfaceAttributesRequest extends SpeakeasyBase {
    headers: UpdateVirtualInterfaceAttributesHeaders;
    request: shared.UpdateVirtualInterfaceAttributesRequest;
}
export declare class UpdateVirtualInterfaceAttributesResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
    virtualInterface?: shared.VirtualInterface;
}
