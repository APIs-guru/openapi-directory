import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopDataCollectionByAgentIdsXAmzTargetEnum {
    AwsPoseidonServiceV20151101StopDataCollectionByAgentIds = "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds"
}
export declare class StopDataCollectionByAgentIdsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopDataCollectionByAgentIdsXAmzTargetEnum;
}
export declare class StopDataCollectionByAgentIdsRequest extends SpeakeasyBase {
    headers: StopDataCollectionByAgentIdsHeaders;
    request: shared.StopDataCollectionByAgentIdsRequest;
}
export declare class StopDataCollectionByAgentIdsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
    stopDataCollectionByAgentIdsResponse?: shared.StopDataCollectionByAgentIdsResponse;
}
