import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMeshPathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class UpdateMeshHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that represents the specification of a service mesh.
**/
export declare class UpdateMeshRequestBodySpec extends SpeakeasyBase {
    egressFilter?: shared.EgressFilter;
}
export declare class UpdateMeshRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec?: UpdateMeshRequestBodySpec;
}
export declare class UpdateMeshRequest extends SpeakeasyBase {
    pathParams: UpdateMeshPathParams;
    headers: UpdateMeshHeaders;
    request: UpdateMeshRequestBody;
}
export declare class UpdateMeshResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateMeshOutput?: shared.UpdateMeshOutput;
}
