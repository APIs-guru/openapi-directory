import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTransitVirtualInterfaceXAmzTargetEnum {
    OvertureServiceCreateTransitVirtualInterface = "OvertureService.CreateTransitVirtualInterface"
}
export declare class CreateTransitVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTransitVirtualInterfaceXAmzTargetEnum;
}
export declare class CreateTransitVirtualInterfaceRequest extends SpeakeasyBase {
    headers: CreateTransitVirtualInterfaceHeaders;
    request: shared.CreateTransitVirtualInterfaceRequest;
}
export declare class CreateTransitVirtualInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    createTransitVirtualInterfaceResult?: shared.CreateTransitVirtualInterfaceResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
