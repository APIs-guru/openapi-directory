import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVirtualServicesPathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class ListVirtualServicesQueryParams extends SpeakeasyBase {
    limit?: number;
    meshOwner?: string;
    nextToken?: string;
}
export declare class ListVirtualServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListVirtualServicesRequest extends SpeakeasyBase {
    pathParams: ListVirtualServicesPathParams;
    queryParams: ListVirtualServicesQueryParams;
    headers: ListVirtualServicesHeaders;
}
export declare class ListVirtualServicesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listVirtualServicesOutput?: shared.ListVirtualServicesOutput;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
