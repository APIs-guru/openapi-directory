import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDiscoverySummaryXAmzTargetEnum {
    AwsPoseidonServiceV20151101GetDiscoverySummary = "AWSPoseidonService_V2015_11_01.GetDiscoverySummary"
}
export declare class GetDiscoverySummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDiscoverySummaryXAmzTargetEnum;
}
export declare class GetDiscoverySummaryRequest extends SpeakeasyBase {
    headers: GetDiscoverySummaryHeaders;
    request: Map<string, any>;
}
export declare class GetDiscoverySummaryResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    getDiscoverySummaryResponse?: shared.GetDiscoverySummaryResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
