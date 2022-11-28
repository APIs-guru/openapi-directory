import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVirtualNodesPathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class ListVirtualNodesQueryParams extends SpeakeasyBase {
    limit?: number;
    nextToken?: string;
}
export declare class ListVirtualNodesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListVirtualNodesRequest extends SpeakeasyBase {
    pathParams: ListVirtualNodesPathParams;
    queryParams: ListVirtualNodesQueryParams;
    headers: ListVirtualNodesHeaders;
}
export declare class ListVirtualNodesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listVirtualNodesOutput?: shared.ListVirtualNodesOutput;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
