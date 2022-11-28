import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVirtualNodePathParams extends SpeakeasyBase {
    meshName: string;
    virtualNodeName: string;
}
export declare class UpdateVirtualNodeQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class UpdateVirtualNodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that represents the specification of a virtual node.
**/
export declare class UpdateVirtualNodeRequestBodySpec extends SpeakeasyBase {
    backendDefaults?: shared.BackendDefaults;
    backends?: shared.Backend[];
    listeners?: shared.Listener[];
    logging?: shared.Logging;
    serviceDiscovery?: shared.ServiceDiscovery;
}
export declare class UpdateVirtualNodeRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: UpdateVirtualNodeRequestBodySpec;
}
export declare class UpdateVirtualNodeRequest extends SpeakeasyBase {
    pathParams: UpdateVirtualNodePathParams;
    queryParams: UpdateVirtualNodeQueryParams;
    headers: UpdateVirtualNodeHeaders;
    request: UpdateVirtualNodeRequestBody;
}
export declare class UpdateVirtualNodeResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateVirtualNodeOutput?: shared.UpdateVirtualNodeOutput;
}
