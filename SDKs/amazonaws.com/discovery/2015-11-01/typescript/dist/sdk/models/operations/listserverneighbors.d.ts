import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListServerNeighborsXAmzTargetEnum {
    AwsPoseidonServiceV20151101ListServerNeighbors = "AWSPoseidonService_V2015_11_01.ListServerNeighbors"
}
export declare class ListServerNeighborsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServerNeighborsXAmzTargetEnum;
}
export declare class ListServerNeighborsRequest extends SpeakeasyBase {
    headers: ListServerNeighborsHeaders;
    request: shared.ListServerNeighborsRequest;
}
export declare class ListServerNeighborsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    listServerNeighborsResponse?: shared.ListServerNeighborsResponse;
    serverInternalErrorException?: any;
    statusCode: number;
}
