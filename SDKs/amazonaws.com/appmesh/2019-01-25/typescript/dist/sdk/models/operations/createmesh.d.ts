import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMeshHeaders extends SpeakeasyBase {
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
export declare class CreateMeshRequestBodySpec extends SpeakeasyBase {
    egressFilter?: shared.EgressFilter;
}
export declare class CreateMeshRequestBody extends SpeakeasyBase {
    clientToken?: string;
    meshName: string;
    spec?: CreateMeshRequestBodySpec;
    tags?: shared.TagRef[];
}
export declare class CreateMeshRequest extends SpeakeasyBase {
    headers: CreateMeshHeaders;
    request: CreateMeshRequestBody;
}
export declare class CreateMeshResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createMeshOutput?: shared.CreateMeshOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
