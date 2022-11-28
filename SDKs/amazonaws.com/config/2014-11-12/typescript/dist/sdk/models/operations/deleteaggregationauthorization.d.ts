import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAggregationAuthorizationXAmzTargetEnum {
    StarlingDoveServiceDeleteAggregationAuthorization = "StarlingDoveService.DeleteAggregationAuthorization"
}
export declare class DeleteAggregationAuthorizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAggregationAuthorizationXAmzTargetEnum;
}
export declare class DeleteAggregationAuthorizationRequest extends SpeakeasyBase {
    headers: DeleteAggregationAuthorizationHeaders;
    request: shared.DeleteAggregationAuthorizationRequest;
}
export declare class DeleteAggregationAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    statusCode: number;
}
