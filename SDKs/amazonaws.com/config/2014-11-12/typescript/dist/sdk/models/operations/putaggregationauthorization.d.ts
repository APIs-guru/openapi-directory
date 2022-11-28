import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAggregationAuthorizationXAmzTargetEnum {
    StarlingDoveServicePutAggregationAuthorization = "StarlingDoveService.PutAggregationAuthorization"
}
export declare class PutAggregationAuthorizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAggregationAuthorizationXAmzTargetEnum;
}
export declare class PutAggregationAuthorizationRequest extends SpeakeasyBase {
    headers: PutAggregationAuthorizationHeaders;
    request: shared.PutAggregationAuthorizationRequest;
}
export declare class PutAggregationAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    putAggregationAuthorizationResponse?: shared.PutAggregationAuthorizationResponse;
    statusCode: number;
}
