import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AllocateTransitVirtualInterfaceXAmzTargetEnum {
    OvertureServiceAllocateTransitVirtualInterface = "OvertureService.AllocateTransitVirtualInterface"
}
export declare class AllocateTransitVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocateTransitVirtualInterfaceXAmzTargetEnum;
}
export declare class AllocateTransitVirtualInterfaceRequest extends SpeakeasyBase {
    headers: AllocateTransitVirtualInterfaceHeaders;
    request: shared.AllocateTransitVirtualInterfaceRequest;
}
export declare class AllocateTransitVirtualInterfaceResponse extends SpeakeasyBase {
    allocateTransitVirtualInterfaceResult?: shared.AllocateTransitVirtualInterfaceResult;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
