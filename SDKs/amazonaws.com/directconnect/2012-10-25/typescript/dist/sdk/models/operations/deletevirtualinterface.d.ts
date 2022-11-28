import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteVirtualInterfaceXAmzTargetEnum {
    OvertureServiceDeleteVirtualInterface = "OvertureService.DeleteVirtualInterface"
}
export declare class DeleteVirtualInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVirtualInterfaceXAmzTargetEnum;
}
export declare class DeleteVirtualInterfaceRequest extends SpeakeasyBase {
    headers: DeleteVirtualInterfaceHeaders;
    request: shared.DeleteVirtualInterfaceRequest;
}
export declare class DeleteVirtualInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    deleteVirtualInterfaceResponse?: shared.DeleteVirtualInterfaceResponse;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
