import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVirtualNodePathParams extends SpeakeasyBase {
    meshName: string;
    virtualNodeName: string;
}
export declare class DeleteVirtualNodeQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DeleteVirtualNodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVirtualNodeRequest extends SpeakeasyBase {
    pathParams: DeleteVirtualNodePathParams;
    queryParams: DeleteVirtualNodeQueryParams;
    headers: DeleteVirtualNodeHeaders;
}
export declare class DeleteVirtualNodeResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteVirtualNodeOutput?: shared.DeleteVirtualNodeOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
