import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePrivateVirtualInterfaceXAmzTargetEnum {
    OvertureServiceCreatePrivateVirtualInterface = "OvertureService.CreatePrivateVirtualInterface"
}
export declare class CreatePrivateVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePrivateVirtualInterfaceXAmzTargetEnum;
}
export declare class CreatePrivateVirtualInterfaceRequest extends SpeakeasyBase {
    headers: CreatePrivateVirtualInterfaceHeaders;
    request: shared.CreatePrivateVirtualInterfaceRequest;
}
export declare class CreatePrivateVirtualInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    statusCode: number;
    tooManyTagsException?: any;
    virtualInterface?: shared.VirtualInterface;
}
