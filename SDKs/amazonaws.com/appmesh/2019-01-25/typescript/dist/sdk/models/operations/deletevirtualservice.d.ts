import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVirtualServicePathParams extends SpeakeasyBase {
    meshName: string;
    virtualServiceName: string;
}
export declare class DeleteVirtualServiceQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DeleteVirtualServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVirtualServiceRequest extends SpeakeasyBase {
    pathParams: DeleteVirtualServicePathParams;
    queryParams: DeleteVirtualServiceQueryParams;
    headers: DeleteVirtualServiceHeaders;
}
export declare class DeleteVirtualServiceResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteVirtualServiceOutput?: shared.DeleteVirtualServiceOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
