import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMeshPathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class DeleteMeshHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMeshRequest extends SpeakeasyBase {
    pathParams: DeleteMeshPathParams;
    headers: DeleteMeshHeaders;
}
export declare class DeleteMeshResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteMeshOutput?: shared.DeleteMeshOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
