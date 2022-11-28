import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVirtualNodePathParams extends SpeakeasyBase {
    meshName: string;
    virtualNodeName: string;
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
 * An object representing the specification of a virtual node.
**/
export declare class UpdateVirtualNodeRequestBodySpec extends SpeakeasyBase {
    backends?: string[];
    listeners?: shared.Listener[];
    serviceDiscovery?: shared.ServiceDiscovery;
}
export declare class UpdateVirtualNodeRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: UpdateVirtualNodeRequestBodySpec;
}
export declare class UpdateVirtualNodeRequest extends SpeakeasyBase {
    pathParams: UpdateVirtualNodePathParams;
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
