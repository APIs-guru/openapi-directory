import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVirtualRoutersPathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class ListVirtualRoutersQueryParams extends SpeakeasyBase {
    limit?: number;
    meshOwner?: string;
    nextToken?: string;
}
export declare class ListVirtualRoutersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListVirtualRoutersRequest extends SpeakeasyBase {
    pathParams: ListVirtualRoutersPathParams;
    queryParams: ListVirtualRoutersQueryParams;
    headers: ListVirtualRoutersHeaders;
}
export declare class ListVirtualRoutersResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listVirtualRoutersOutput?: shared.ListVirtualRoutersOutput;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
