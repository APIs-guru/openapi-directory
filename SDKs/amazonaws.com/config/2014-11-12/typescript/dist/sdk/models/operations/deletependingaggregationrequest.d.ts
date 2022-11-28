import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePendingAggregationRequestXAmzTargetEnum {
    StarlingDoveServiceDeletePendingAggregationRequest = "StarlingDoveService.DeletePendingAggregationRequest"
}
export declare class DeletePendingAggregationRequestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePendingAggregationRequestXAmzTargetEnum;
}
export declare class DeletePendingAggregationRequestRequest extends SpeakeasyBase {
    headers: DeletePendingAggregationRequestHeaders;
    request: shared.DeletePendingAggregationRequestRequest;
}
export declare class DeletePendingAggregationRequestResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    statusCode: number;
}
