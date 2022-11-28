import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVirtualNodePathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class CreateVirtualNodeQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class CreateVirtualNodeHeaders extends SpeakeasyBase {
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
export declare class CreateVirtualNodeRequestBodySpec extends SpeakeasyBase {
    backendDefaults?: shared.BackendDefaults;
    backends?: shared.Backend[];
    listeners?: shared.Listener[];
    logging?: shared.Logging;
    serviceDiscovery?: shared.ServiceDiscovery;
}
export declare class CreateVirtualNodeRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: CreateVirtualNodeRequestBodySpec;
    tags?: shared.TagRef[];
    virtualNodeName: string;
}
export declare class CreateVirtualNodeRequest extends SpeakeasyBase {
    pathParams: CreateVirtualNodePathParams;
    queryParams: CreateVirtualNodeQueryParams;
    headers: CreateVirtualNodeHeaders;
    request: CreateVirtualNodeRequestBody;
}
export declare class CreateVirtualNodeResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createVirtualNodeOutput?: shared.CreateVirtualNodeOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
