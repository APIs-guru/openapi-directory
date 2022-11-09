import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartDataCollectionByAgentIdsXAmzTargetEnum {
    AwsPoseidonServiceV20151101StartDataCollectionByAgentIds = "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds"
}
export declare class StartDataCollectionByAgentIdsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDataCollectionByAgentIdsXAmzTargetEnum;
}
export declare class StartDataCollectionByAgentIdsRequest extends SpeakeasyBase {
    headers: StartDataCollectionByAgentIdsHeaders;
    request: shared.StartDataCollectionByAgentIdsRequest;
}
export declare class StartDataCollectionByAgentIdsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    startDataCollectionByAgentIdsResponse?: shared.StartDataCollectionByAgentIdsResponse;
    statusCode: number;
}
