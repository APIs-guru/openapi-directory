import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AllocatePublicVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAllocatePublicVirtualInterface = "OvertureService.AllocatePublicVirtualInterface"
}
export declare class AllocatePublicVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocatePublicVirtualInterfaceXAmzTargetEnum;
}
export declare class AllocatePublicVirtualInterfaceRequest extends SpeakeasyBase {
    headers: AllocatePublicVirtualInterfaceHeaders;
    request: shared.AllocatePublicVirtualInterfaceRequest;
}
export declare class AllocatePublicVirtualInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    statusCode: number;
    tooManyTagsException?: any;
    virtualInterface?: shared.VirtualInterface;
}
