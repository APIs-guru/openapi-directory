import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePublicVirtualInterfaceXAmzTargetEnum {
    OvertureServiceCreatePublicVirtualInterface = "OvertureService.CreatePublicVirtualInterface"
}
export declare class CreatePublicVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePublicVirtualInterfaceXAmzTargetEnum;
}
export declare class CreatePublicVirtualInterfaceRequest extends SpeakeasyBase {
    headers: CreatePublicVirtualInterfaceHeaders;
    request: shared.CreatePublicVirtualInterfaceRequest;
}
export declare class CreatePublicVirtualInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    statusCode: number;
    tooManyTagsException?: any;
    virtualInterface?: shared.VirtualInterface;
}
