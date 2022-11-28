import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMeshesQueryParams extends SpeakeasyBase {
    limit?: number;
    nextToken?: string;
}
export declare class ListMeshesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMeshesRequest extends SpeakeasyBase {
    queryParams: ListMeshesQueryParams;
    headers: ListMeshesHeaders;
}
export declare class ListMeshesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listMeshesOutput?: shared.ListMeshesOutput;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
