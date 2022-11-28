import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVirtualNodePathParams extends SpeakeasyBase {
    meshName: string;
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
 * An object representing the specification of a virtual node.
**/
export declare class CreateVirtualNodeRequestBodySpec extends SpeakeasyBase {
    backends?: string[];
    listeners?: shared.Listener[];
    serviceDiscovery?: shared.ServiceDiscovery;
}
export declare class CreateVirtualNodeRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: CreateVirtualNodeRequestBodySpec;
    virtualNodeName: string;
}
export declare class CreateVirtualNodeRequest extends SpeakeasyBase {
    pathParams: CreateVirtualNodePathParams;
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
