import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AllocatePrivateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAllocatePrivateVirtualInterface = "OvertureService.AllocatePrivateVirtualInterface"
}
export declare class AllocatePrivateVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocatePrivateVirtualInterfaceXAmzTargetEnum;
}
export declare class AllocatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
    headers: AllocatePrivateVirtualInterfaceHeaders;
    request: shared.AllocatePrivateVirtualInterfaceRequest;
}
export declare class AllocatePrivateVirtualInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    statusCode: number;
    tooManyTagsException?: any;
    virtualInterface?: shared.VirtualInterface;
}
